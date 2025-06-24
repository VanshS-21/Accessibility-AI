"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Shield,
  Key,
  Smartphone,
  Eye,
  EyeOff,
  CheckCircle,
  AlertTriangle,
  Monitor,
  MapPin,
  Calendar,
  Trash2,
  Download,
  Copy,
  RefreshCw,
} from "lucide-react"

export default function SecurityPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [loginAlerts, setLoginAlerts] = useState(true)
  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  const activeSessions = [
    {
      id: 1,
      device: "MacBook Pro",
      browser: "Chrome 120.0",
      location: "San Francisco, CA",
      ip: "192.168.1.100",
      lastActive: "Active now",
      current: true,
    },
    {
      id: 2,
      device: "iPhone 15 Pro",
      browser: "Safari Mobile",
      location: "San Francisco, CA",
      ip: "192.168.1.101",
      lastActive: "2 hours ago",
      current: false,
    },
    {
      id: 3,
      device: "Windows PC",
      browser: "Edge 119.0",
      location: "New York, NY",
      ip: "203.0.113.45",
      lastActive: "1 day ago",
      current: false,
    },
  ]

  const loginHistory = [
    {
      id: 1,
      date: "2024-01-15 09:30",
      device: "MacBook Pro",
      location: "San Francisco, CA",
      ip: "192.168.1.100",
      status: "success",
    },
    {
      id: 2,
      date: "2024-01-14 18:45",
      device: "iPhone 15 Pro",
      location: "San Francisco, CA",
      ip: "192.168.1.101",
      status: "success",
    },
    {
      id: 3,
      date: "2024-01-14 14:20",
      device: "Unknown Device",
      location: "Los Angeles, CA",
      ip: "198.51.100.42",
      status: "failed",
    },
    {
      id: 4,
      date: "2024-01-13 22:15",
      device: "Windows PC",
      location: "New York, NY",
      ip: "203.0.113.45",
      status: "success",
    },
  ]

  const backupCodes = [
    "1234-5678-9012",
    "3456-7890-1234",
    "5678-9012-3456",
    "7890-1234-5678",
    "9012-3456-7890",
    "2345-6789-0123",
    "4567-8901-2345",
    "6789-0123-4567",
  ]

  const handlePasswordChange = () => {
    // Here you would typically validate and submit the password change
    console.log("Password change requested")
    setPasswordData({ current: "", new: "", confirm: "" })
  }

  const handleSessionTerminate = (sessionId: number) => {
    console.log("Terminating session:", sessionId)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Security Settings</h1>
        <p className="text-gray-400">Manage your account security and privacy settings</p>
      </div>

      {/* Security Overview */}
      <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Security Status
          </CardTitle>
          <CardDescription className="text-gray-400">
            Your account security overview and recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-sm font-medium text-white">Strong Password</p>
                <p className="text-xs text-gray-400">Last changed 30 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="text-sm font-medium text-white">2FA Disabled</p>
                <p className="text-xs text-gray-400">Enable for better security</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-sm font-medium text-white">Login Alerts</p>
                <p className="text-xs text-gray-400">Monitoring enabled</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Password Settings */}
        <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Key className="mr-2 h-5 w-5" />
              Password Settings
            </CardTitle>
            <CardDescription className="text-gray-400">
              Update your password to keep your account secure
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword" className="text-gray-300">
                Current Password
              </Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwordData.current}
                  onChange={(e) => setPasswordData((prev) => ({ ...prev, current: e.target.value }))}
                  className="bg-gray-800/50 border-gray-700 text-white pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword" className="text-gray-300">
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={passwordData.new}
                  onChange={(e) => setPasswordData((prev) => ({ ...prev, new: e.target.value }))}
                  className="bg-gray-800/50 border-gray-700 text-white pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-300">
                Confirm New Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={passwordData.confirm}
                  onChange={(e) => setPasswordData((prev) => ({ ...prev, confirm: e.target.value }))}
                  className="bg-gray-800/50 border-gray-700 text-white pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <Button
              onClick={handlePasswordChange}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Smartphone className="mr-2 h-5 w-5" />
              Two-Factor Authentication
            </CardTitle>
            <CardDescription className="text-gray-400">Add an extra layer of security to your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-gray-300">Enable 2FA</Label>
                <p className="text-sm text-gray-400">Use an authenticator app to generate verification codes</p>
              </div>
              <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
            </div>

            {twoFactorEnabled && (
              <div className="space-y-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Authenticator App</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Enabled</Badge>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white">
                      View Backup Codes
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-gray-800 text-white">
                    <DialogHeader>
                      <DialogTitle>Backup Codes</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        Save these codes in a safe place. You can use them to access your account if you lose your
                        authenticator device.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2 p-4 bg-gray-800/50 rounded-lg">
                        {backupCodes.map((code, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 bg-gray-800 rounded text-sm font-mono"
                          >
                            <span>{code}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(code)}
                              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          className="flex-1 border-gray-700 text-gray-300 hover:text-white"
                          onClick={() => copyToClipboard(backupCodes.join("\n"))}
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Copy All
                        </Button>
                        <Button variant="outline" className="flex-1 border-gray-700 text-gray-300 hover:text-white">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                        <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {!twoFactorEnabled && (
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-yellow-400 mb-2">
                  <AlertTriangle className="inline h-4 w-4 mr-1" />
                  Two-factor authentication is disabled
                </p>
                <p className="text-xs text-gray-400">Enable 2FA to significantly improve your account security</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Security Preferences */}
      <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Security Preferences</CardTitle>
          <CardDescription className="text-gray-400">Configure your security and privacy preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-gray-300">Login Alerts</Label>
              <p className="text-sm text-gray-400">Get notified when someone signs in to your account</p>
            </div>
            <Switch checked={loginAlerts} onCheckedChange={setLoginAlerts} />
          </div>

          <Separator className="bg-gray-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-gray-300">Session Timeout</Label>
              <p className="text-sm text-gray-400">Automatically sign out after 30 minutes of inactivity</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator className="bg-gray-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-gray-300">Remember Devices</Label>
              <p className="text-sm text-gray-400">Skip 2FA on trusted devices for 30 days</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Active Sessions */}
      <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Monitor className="mr-2 h-5 w-5" />
            Active Sessions
          </CardTitle>
          <CardDescription className="text-gray-400">
            Manage devices that are currently signed in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeSessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-700 rounded-lg">
                  <Monitor className="h-5 w-5 text-gray-300" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-white">{session.device}</p>
                    {session.current && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">Current</Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{session.browser}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {session.location}
                    </span>
                    <span>{session.ip}</span>
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {session.lastActive}
                    </span>
                  </div>
                </div>
              </div>
              {!session.current && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-gray-900 border-gray-800">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-white">Terminate Session</AlertDialogTitle>
                      <AlertDialogDescription className="text-gray-400">
                        Are you sure you want to terminate this session? The user will be signed out immediately.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="border-gray-700 text-gray-300 hover:text-white">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleSessionTerminate(session.id)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Terminate
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Login History */}
      <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Login History</CardTitle>
          <CardDescription className="text-gray-400">Recent sign-in activity for your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {loginHistory.map((login) => (
              <div
                key={login.id}
                className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${login.status === "success" ? "bg-green-500/20" : "bg-red-500/20"}`}>
                    {login.status === "success" ? (
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-white">{login.device}</p>
                      <Badge
                        className={
                          login.status === "success"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                        }
                      >
                        {login.status === "success" ? "Success" : "Failed"}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {login.location}
                      </span>
                      <span>{login.ip}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">{login.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="bg-red-500/5 border-red-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-red-400">Danger Zone</CardTitle>
          <CardDescription className="text-gray-400">Irreversible and destructive actions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg">
            <div>
              <h4 className="text-sm font-medium text-white">Delete Account</h4>
              <p className="text-xs text-gray-400">Permanently delete your account and all associated data</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white">
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-gray-900 border-gray-800">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white">Delete Account</AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-400">
                    This action cannot be undone. This will permanently delete your account and remove all your data
                    from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="border-gray-700 text-gray-300 hover:text-white">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction className="bg-red-600 hover:bg-red-700">Delete Account</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
