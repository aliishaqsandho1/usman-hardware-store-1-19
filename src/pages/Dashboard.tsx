
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Grid, Bookmark, Settings, User, CreditCard, Download, Bell, LogOut } from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-theme-darker flex">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block bg-theme-dark border-r border-gray-800 p-4 fixed h-screen overflow-y-auto">
        <div className="mb-8 px-2">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-purple">
              ThemeMorphic
            </span>
          </Link>
        </div>
        
        <nav className="space-y-1">
          <NavItem href="/dashboard" icon={<Grid size={18} />} active>Dashboard</NavItem>
          <NavItem href="/dashboard/themes" icon={<Bookmark size={18} />}>My Themes</NavItem>
          <NavItem href="/dashboard/settings" icon={<Settings size={18} />}>Settings</NavItem>
          <NavItem href="/dashboard/profile" icon={<User size={18} />}>Profile</NavItem>
          <NavItem href="/dashboard/billing" icon={<CreditCard size={18} />}>Billing</NavItem>
        </nav>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <Button variant="outline" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
      </aside>
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-theme-dark border-b border-gray-800 z-20">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-purple">
              ThemeMorphic
            </span>
          </Link>
          <Button variant="outline" size="sm">
            <Grid className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-16 md:pt-0">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-400">Welcome back, John!</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-400" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-theme-purple rounded-full"></span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <span>John Doe</span>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Active Themes", value: "5", change: "+1 this month" },
              { title: "Downloads", value: "256", change: "+24% from last month" },
              { title: "Support Tickets", value: "2", change: "1 resolved, 1 open" },
              { title: "Subscription", value: "Pro", change: "Renews in 240 days" }
            ].map((stat, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold mb-2">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* My Themes */}
          <h2 className="text-xl font-semibold mb-4">My Themes</h2>
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                <Input placeholder="Search themes..." className="pl-9 bg-theme-dark border-gray-700 w-64" />
              </div>
              <Button className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                New Theme
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Business Pro", type: "Business", lastModified: "2 days ago" },
                { name: "Real Estate Modern", type: "Real Estate", lastModified: "1 week ago" },
                { name: "Educational Platform", type: "Education", lastModified: "2 weeks ago" },
                { name: "Tech Startup", type: "SaaS", lastModified: "1 month ago" },
                { name: "Portfolio Minimal", type: "Portfolio", lastModified: "1 month ago" }
              ].map((theme, index) => (
                <Card key={index} className="glass-card hover:scale-105 transition-transform">
                  <CardContent className="p-0">
                    <div className="h-40 bg-gray-800 relative">
                      <div className="absolute bottom-3 right-3">
                        <Button variant="outline" size="sm">Preview</Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">{theme.name}</h3>
                      <p className="text-sm text-gray-400">{theme.type} Theme</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-gray-500">Modified {theme.lastModified}</span>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Activity & Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { action: "Downloaded Business Pro theme", time: "2 hours ago" },
                    { action: "Created new theme", time: "2 days ago" },
                    { action: "Renewed subscription", time: "1 week ago" },
                    { action: "Support ticket resolved", time: "2 weeks ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-theme-blue mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Support Tickets</h3>
                <Tabs defaultValue="open">
                  <TabsList className="mb-4">
                    <TabsTrigger value="open">Open</TabsTrigger>
                    <TabsTrigger value="resolved">Resolved</TabsTrigger>
                  </TabsList>
                  <TabsContent value="open">
                    <div className="space-y-4">
                      {[
                        { title: "Issue with theme customization", priority: "High", created: "2 days ago" }
                      ].map((ticket, index) => (
                        <div key={index} className="p-3 bg-theme-dark rounded-lg">
                          <div className="flex justify-between mb-1">
                            <h4 className="font-medium">{ticket.title}</h4>
                            <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded">
                              {ticket.priority}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">Created {ticket.created}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="resolved">
                    <div className="space-y-4">
                      {[
                        { title: "Payment issue resolved", priority: "Medium", resolved: "1 week ago" }
                      ].map((ticket, index) => (
                        <div key={index} className="p-3 bg-theme-dark rounded-lg">
                          <div className="flex justify-between mb-1">
                            <h4 className="font-medium">{ticket.title}</h4>
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                              Resolved
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">Resolved {ticket.resolved}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
                <Button variant="outline" className="w-full mt-4">
                  Create New Ticket
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Recommended Themes */}
          <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { name: "E-commerce Essential", type: "E-commerce", popularity: "Trending" },
              { name: "Blog Professional", type: "Blog", popularity: "Popular" },
              { name: "Charity Plus", type: "Non-profit", popularity: "New" },
              { name: "Restaurant Menu", type: "Food", popularity: "Best Seller" }
            ].map((theme, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-0">
                  <div className="h-32 bg-gray-800 relative">
                    <div className="absolute top-2 right-2 bg-theme-purple/80 text-xs font-medium py-1 px-2 rounded">
                      {theme.popularity}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-1">{theme.name}</h3>
                    <p className="text-xs text-gray-400">{theme.type}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ href, icon, children, active = false }) => (
  <Link 
    to={href}
    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
      active 
        ? 'bg-theme-blue/10 text-theme-blue' 
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`}
  >
    <span className="mr-3">{icon}</span>
    <span>{children}</span>
  </Link>
);

export default Dashboard;
