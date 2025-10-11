import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Avatar, Button, Grid, Card, CardContent, CircularProgress, Alert, TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { getUserProfile, updateUserProfile } from "../../Apis/ProfileApis";

const ProfileContent = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});
  const [saving, setSaving] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getUserProfile();
        setProfileData(response.data); // Access the data property from API response
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Failed to load profile data. Please try again.');
      } finally {
        setLoading(false);  
      }
    };

    fetchProfileData();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
    setEditData({
      fullName: profileData.fullName || '',
      email: profileData.email || '',
      phoneNumber: profileData.phoneNumber || '',
      dob: profileData.dob || '',
      gender: profileData.gender || '',
      bio: profileData.bio || ''
    });
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditData({});
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError(null);

      const updatePayload = {};

      // Only include fields that have changed
      if (editData.fullName !== profileData.fullName) {
        updatePayload.fullName = editData.fullName;
      }
      if (editData.email !== profileData.email) {
        updatePayload.email = editData.email;
      }
      if (editData.phoneNumber !== profileData.phoneNumber) {
        updatePayload.phoneNumber = editData.phoneNumber;
      }
      if (editData.dob !== profileData.dob) {
        updatePayload.dob = editData.dob;
      }
      if (editData.gender !== profileData.gender) {
        updatePayload.gender = editData.gender;
      }
      if (editData.bio !== profileData.bio) {
        updatePayload.bio = editData.bio;
      }

      // Handle image upload separately if image is selected
      if (selectedImage) {
        updatePayload.profileImage = selectedImage;
      }

      // If no changes, don't make API call
      if (Object.keys(updatePayload).length === 0 && !selectedImage) {
        setEditMode(false);
        setEditData({});
        setSelectedImage(null);
        setImagePreview(null);
        return;
      }

      const response = await updateUserProfile(profileData.id, updatePayload);

      // Refresh profile data from server after successful update
      try {
        const refreshedResponse = await getUserProfile();
        setProfileData(refreshedResponse.data);
      } catch (refreshError) {
        console.error('Error refreshing profile data:', refreshError);
        // Still update with response data if refresh fails
        setProfileData(response.data);
      }

      setEditMode(false);
      setEditData({});
      setSelectedImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Loading State */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Error State */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Profile Content */}
      {!loading && !error && profileData && (
        <>
          {/* User Profile Header Section */}
          <Card sx={{ borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
            <CardContent sx={{ p: { xs: 0, sm: 3 } }}>
              <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'center' },
                justifyContent: { xs: 'center', sm: 'space-between' },
                textAlign: { xs: 'center', sm: 'left' },
                gap: { xs: 2, sm: 3 }
              }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  gap: { xs: 2, sm: 3 }
                }}>
                  <Box sx={{ position: 'relative' }}>
                    <Avatar
                      src={imagePreview || profileData.image || null}
                      alt={profileData.fullName}
                      sx={{
                        width: { xs: 60, sm: 80 },
                        height: { xs: 60, sm: 80 },
                        border: '2px solid #e0e0e0',
                        backgroundColor: profileData.image || imagePreview ? 'transparent' : '#368ADD',
                        color: profileData.image || imagePreview ? 'inherit' : 'white',
                        fontSize: { xs: '1.5rem', sm: '2rem' },
                        fontWeight: 'bold'
                      }}
                    >
                      {(imagePreview || profileData.image) ? null : (profileData.fullName?.charAt(0)?.toUpperCase() || 'U')}
                    </Avatar>
                    {editMode && (
                      <IconButton
                        sx={{
                          position: 'absolute',
                          bottom: -5,
                          right: -5,
                          backgroundColor: '#368ADD',
                          color: 'white',
                          width: 30,
                          height: 30,
                          '&:hover': {
                            backgroundColor: '#2c6bb3'
                          }
                        }}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <PhotoCameraIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                    )}
                  </Box>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                  <Box>
                    <Typography variant={{ xs: "h6", sm: "h5" }} sx={{ fontWeight: 'bold', color: '#333', mb: 0.5 }}>
                      {profileData.fullName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                      Patient | Since {profileData.createdAt ? new Date(profileData.createdAt).getFullYear() : '2025'}
                    </Typography>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', sm: 'flex-start' },
                      gap: 0.5
                    }}>
                      <LocalPhoneIcon sx={{ fontSize: '1rem', color: '#666' }} />
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {profileData.phoneNumber || 'Phone not available'}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  {!editMode ? (
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={handleEdit}
                      sx={{
                        borderColor: '#368ADD',
                        color: '#368ADD',
                        textTransform: 'none',
                        px: 2,
                        py: 1,
                        '&:hover': {
                          borderColor: '#2c6bb3',
                          backgroundColor: '#f0f8ff'
                        }
                      }}
                    >
                      Edit
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        startIcon={saving ? <CircularProgress size={16} color="inherit" /> : <SaveIcon />}
                        onClick={handleSave}
                        disabled={saving}
                        sx={{
                          backgroundColor: saving ? '#ccc' : '#4CAF50',
                          color: 'white',
                          textTransform: 'none',
                          px: 2,
                          py: 1,
                          '&:hover': {
                            backgroundColor: saving ? '#ccc' : '#45a049'
                          }
                        }}
                      >
                        {saving ? 'Saving...' : 'Save'}
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<CancelIcon />}
                        onClick={handleCancelEdit}
                        disabled={saving}
                        sx={{
                          borderColor: '#f44336',
                          color: '#f44336',
                          textTransform: 'none',
                          px: 2,
                          py: 1,
                          '&:hover': {
                            borderColor: '#d32f2f',
                            backgroundColor: '#ffebee'
                          }
                        }}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Personal Information Section */}
          <Card sx={{ borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                mb: 3,
                gap: { xs: 2, sm: 0 }
              }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#368ADD' }}>
                  Personal information
                </Typography>
                
              </Box>

              <Grid container spacing={{ xs: 1, sm: 2 }}>
                <Grid item size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ mb: { xs: 0.5, sm: 1 } }}>
                    <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                      Full Name
                    </Typography>
                    {editMode ? (
                      <TextField
                        fullWidth
                        size="small"
                        value={editData.fullName || ''}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        variant="outlined"
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                        {profileData.fullName || 'N/A'}
                      </Typography>
                    )}
                  </Box>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ mb: { xs: 0.5, sm: 1 } }}>
                    <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                      Email
                    </Typography>
                    {editMode ? (
                      <TextField
                        fullWidth
                        size="small"
                        type="email"
                        value={editData.email || ''}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        variant="outlined"
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                        {profileData.email || 'N/A'}
                      </Typography>
                    )}
                  </Box>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ mb: { xs: 0.5, sm: 1 } }}>
                    <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                      Mobile Number
                    </Typography>
                    {editMode ? (
                      <TextField
                        fullWidth
                        size="small"
                        value={editData.phoneNumber || ''}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        variant="outlined"
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                        {profileData.phoneNumber || 'N/A'}
                      </Typography>
                    )}
                  </Box>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ mb: { xs: 0.5, sm: 1 } }}>
                    <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                      Date of Birth
                    </Typography>
                    {editMode ? (
                      <TextField
                        fullWidth
                        size="small"
                        type="date"
                        value={editData.dob || ''}
                        onChange={(e) => handleInputChange('dob', e.target.value)}
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                        {profileData.dob ? new Date(profileData.dob).toLocaleDateString() : 'N/A'}
                      </Typography>
                    )}
                  </Box>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6}}>
                  <Box sx={{ mb: { xs: 0.5, sm: 1 } }}>
                    <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                      Gender
                    </Typography>
                    {editMode ? (
                      <TextField
                        fullWidth
                        size="small"
                        value={editData.gender || ''}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        variant="outlined"
                        placeholder="Male/Female/Other"
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                        {profileData.gender || 'N/A'}
                      </Typography>
                    )}
                  </Box>
                </Grid>
                <Grid item size={{ xs: 12 , sm:6 }}>
                  <Box sx={{ mb: { xs: 0.5, sm: 1 } }}>
                    <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                      Bio
                    </Typography>
                    {editMode ? (
                      <TextField
                        fullWidth
                        size="small"
                        multiline
                        rows={3}
                        value={editData.bio || ''}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        variant="outlined"
                        placeholder="Tell us about yourself..."
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                        {profileData.bio || 'N/A'}
                      </Typography>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </>
      )}
    </Box>
  );
};

export default ProfileContent;
