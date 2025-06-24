"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Camera, Save, User, Mail, MapPin, Globe, Briefcase } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Corporation",
    jobTitle: "Senior UX Designer",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    bio: "Passionate about creating accessible and inclusive digital experiences. I specialize in web accessibility auditing and have been working in the field for over 5 years.",
    timezone: "America/Los_Angeles",
    language: "en",
    publicProfile: true,
    emailNotifications: true,
    marketingEmails: false,
    weeklyReports: true,
  })

  const handleSave = () => {
    // Here you would typically save to your backend
    setIsEditing(false)
    // Show success message
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-gray-200">Manage your account information and preferences</p>
        </div>
        <div className="flex items-center space-x-3">
          {isEditing ? (
            <>
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="border-gray-600 text-gray-200 hover:text-white hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Picture & Basic Info */}
        <div className="lg:col-span-1">
          <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="relative mx-auto">
                <Avatar className="h-24 w-24 mx-auto">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl">
                    {profileData.firstName[0]}
                    {profileData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gray-700 hover:bg-gray-600 border border-gray-600"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-gray-200">{profileData.jobTitle}</p>
                <p className="text-gray-300 text-sm">{profileData.company}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <Mail className="h-4 w-4" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <MapPin className="h-4 w-4" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <Globe className="h-4 w-4" />
                <span>{profileData.website}</span>
              </div>
              <div className="pt-4">
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Active Account
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Profile Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="mr-2 h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription className="text-gray-200">
                Update your personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-200">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={profileData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    disabled={!isEditing}
                    className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60 disabled:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-200">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={profileData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    disabled={!isEditing}
                    className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60 disabled:text-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={!isEditing}
                  className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60 disabled:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-200">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  disabled={!isEditing}
                  className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60 disabled:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-gray-200">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  disabled={!isEditing}
                  rows={4}
                  className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60 disabled:text-gray-300 resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                Professional Information
              </CardTitle>
              <CardDescription className="text-gray-200">Your work-related information and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-200">
                    Company
                  </Label>
                  <Input
                    id="company"
                    value={profileData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    disabled={!isEditing}
                    className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60 disabled:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-gray-200">
                    Job Title
                  </Label>
                  <Input
                    id="jobTitle"
                    value={profileData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    disabled={!isEditing}
                    className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60 disabled:text-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-gray-200">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    disabled={!isEditing}
                    className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60 disabled:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-gray-200">
                    Website
                  </Label>
                  <Input
                    id="website"
                    value={profileData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    disabled={!isEditing}
                    className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60 disabled:text-gray-300"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Preferences</CardTitle>
              <CardDescription className="text-gray-200">
                Customize your account settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-gray-200">
                    Timezone
                  </Label>
                  <Select
                    value={profileData.timezone}
                    onValueChange={(value) => handleInputChange("timezone", value)}
                    disabled={!isEditing}
                  >
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="America/Los_Angeles" className="text-gray-200 hover:text-white">
                        Pacific Time (PT)
                      </SelectItem>
                      <SelectItem value="America/Denver" className="text-gray-200 hover:text-white">
                        Mountain Time (MT)
                      </SelectItem>
                      <SelectItem value="America/Chicago" className="text-gray-200 hover:text-white">
                        Central Time (CT)
                      </SelectItem>
                      <SelectItem value="America/New_York" className="text-gray-200 hover:text-white">
                        Eastern Time (ET)
                      </SelectItem>
                      <SelectItem value="Europe/London" className="text-gray-200 hover:text-white">
                        London (GMT)
                      </SelectItem>
                      <SelectItem value="Europe/Paris" className="text-gray-200 hover:text-white">
                        Paris (CET)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-gray-200">
                    Language
                  </Label>
                  <Select
                    value={profileData.language}
                    onValueChange={(value) => handleInputChange("language", value)}
                    disabled={!isEditing}
                  >
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white disabled:opacity-60">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="en" className="text-gray-200 hover:text-white">
                        English
                      </SelectItem>
                      <SelectItem value="es" className="text-gray-200 hover:text-white">
                        Spanish
                      </SelectItem>
                      <SelectItem value="fr" className="text-gray-200 hover:text-white">
                        French
                      </SelectItem>
                      <SelectItem value="de" className="text-gray-200 hover:text-white">
                        German
                      </SelectItem>
                      <SelectItem value="it" className="text-gray-200 hover:text-white">
                        Italian
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="bg-gray-700" />

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white">Privacy & Notifications</h4>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-200">Public Profile</Label>
                    <p className="text-sm text-gray-300">Make your profile visible to other users</p>
                  </div>
                  <Switch
                    checked={profileData.publicProfile}
                    onCheckedChange={(checked) => handleInputChange("publicProfile", checked)}
                    disabled={!isEditing}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-200">Email Notifications</Label>
                    <p className="text-sm text-gray-300">Receive notifications about your analyses</p>
                  </div>
                  <Switch
                    checked={profileData.emailNotifications}
                    onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
                    disabled={!isEditing}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-200">Marketing Emails</Label>
                    <p className="text-sm text-gray-300">Receive updates about new features and tips</p>
                  </div>
                  <Switch
                    checked={profileData.marketingEmails}
                    onCheckedChange={(checked) => handleInputChange("marketingEmails", checked)}
                    disabled={!isEditing}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-200">Weekly Reports</Label>
                    <p className="text-sm text-gray-300">Get a summary of your accessibility progress</p>
                  </div>
                  <Switch
                    checked={profileData.weeklyReports}
                    onCheckedChange={(checked) => handleInputChange("weeklyReports", checked)}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
