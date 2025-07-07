
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Save, Palette, Type, Layout, Settings } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface ThemeConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  typography: {
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
  };
  layout: {
    containerWidth: string;
    borderRadius: number;
    spacing: number;
  };
  features: {
    darkMode: boolean;
    animations: boolean;
    responsiveDesign: boolean;
    accessibility: boolean;
  };
}

const ThemeBuilder: React.FC = () => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    name: "My Custom Theme",
    colors: {
      primary: "#3b82f6",
      secondary: "#64748b",
      accent: "#8b5cf6",
      background: "#ffffff",
      text: "#1f2937"
    },
    typography: {
      fontFamily: "Inter",
      fontSize: 16,
      lineHeight: 1.5
    },
    layout: {
      containerWidth: "1200px",
      borderRadius: 8,
      spacing: 16
    },
    features: {
      darkMode: true,
      animations: true,
      responsiveDesign: true,
      accessibility: true
    }
  });

  const [activeTab, setActiveTab] = useState("colors");

  const updateThemeConfig = (section: keyof ThemeConfig, key: string, value: any) => {
    setThemeConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const handleSaveTheme = () => {
    console.log("Saving theme:", themeConfig);
    // Theme saving logic would go here
  };

  const handlePreviewTheme = () => {
    console.log("Previewing theme:", themeConfig);
    // Theme preview logic would go here
  };

  const handleDownloadTheme = () => {
    console.log("Downloading theme:", themeConfig);
    // Theme download logic would go here
  };

  return (
    <div className="min-h-screen bg-theme-darker">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Theme <span className="text-gradient">Builder</span>
              </h1>
              <p className="text-gray-400">Create and customize your perfect WordPress theme</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button variant="outline" onClick={handlePreviewTheme} className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Preview
              </Button>
              <Button variant="outline" onClick={handleSaveTheme} className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save
              </Button>
              <Button onClick={handleDownloadTheme} className="flex items-center gap-2 bg-gradient-to-r from-theme-blue to-theme-purple">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Theme Configuration Panel */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Theme Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="colors" className="flex items-center gap-2">
                        <Palette className="w-4 h-4" />
                        Colors
                      </TabsTrigger>
                      <TabsTrigger value="typography" className="flex items-center gap-2">
                        <Type className="w-4 h-4" />
                        Typography
                      </TabsTrigger>
                      <TabsTrigger value="layout" className="flex items-center gap-2">
                        <Layout className="w-4 h-4" />
                        Layout
                      </TabsTrigger>
                      <TabsTrigger value="features">Features</TabsTrigger>
                    </TabsList>

                    <TabsContent value="colors" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="primary-color">Primary Color</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              id="primary-color"
                              type="color"
                              value={themeConfig.colors.primary}
                              onChange={(e) => updateThemeConfig('colors', 'primary', e.target.value)}
                              className="w-16 h-10"
                            />
                            <Input
                              value={themeConfig.colors.primary}
                              onChange={(e) => updateThemeConfig('colors', 'primary', e.target.value)}
                              className="flex-1"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="secondary-color">Secondary Color</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              id="secondary-color"
                              type="color"
                              value={themeConfig.colors.secondary}
                              onChange={(e) => updateThemeConfig('colors', 'secondary', e.target.value)}
                              className="w-16 h-10"
                            />
                            <Input
                              value={themeConfig.colors.secondary}
                              onChange={(e) => updateThemeConfig('colors', 'secondary', e.target.value)}
                              className="flex-1"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="accent-color">Accent Color</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              id="accent-color"
                              type="color"
                              value={themeConfig.colors.accent}
                              onChange={(e) => updateThemeConfig('colors', 'accent', e.target.value)}
                              className="w-16 h-10"
                            />
                            <Input
                              value={themeConfig.colors.accent}
                              onChange={(e) => updateThemeConfig('colors', 'accent', e.target.value)}
                              className="flex-1"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="background-color">Background Color</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              id="background-color"
                              type="color"
                              value={themeConfig.colors.background}
                              onChange={(e) => updateThemeConfig('colors', 'background', e.target.value)}
                              className="w-16 h-10"
                            />
                            <Input
                              value={themeConfig.colors.background}
                              onChange={(e) => updateThemeConfig('colors', 'background', e.target.value)}
                              className="flex-1"
                            />
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="typography" className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="font-family">Font Family</Label>
                          <Select
                            value={themeConfig.typography.fontFamily}
                            onValueChange={(value) => updateThemeConfig('typography', 'fontFamily', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select font family" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Inter">Inter</SelectItem>
                              <SelectItem value="Roboto">Roboto</SelectItem>
                              <SelectItem value="Open Sans">Open Sans</SelectItem>
                              <SelectItem value="Lato">Lato</SelectItem>
                              <SelectItem value="Montserrat">Montserrat</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Font Size: {themeConfig.typography.fontSize}px</Label>
                          <Slider
                            value={[themeConfig.typography.fontSize]}
                            onValueChange={(value) => updateThemeConfig('typography', 'fontSize', value[0])}
                            max={24}
                            min={12}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Line Height: {themeConfig.typography.lineHeight}</Label>
                          <Slider
                            value={[themeConfig.typography.lineHeight]}
                            onValueChange={(value) => updateThemeConfig('typography', 'lineHeight', value[0])}
                            max={2}
                            min={1}
                            step={0.1}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="layout" className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="container-width">Container Width</Label>
                          <Select
                            value={themeConfig.layout.containerWidth}
                            onValueChange={(value) => updateThemeConfig('layout', 'containerWidth', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select container width" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1200px">1200px</SelectItem>
                              <SelectItem value="1140px">1140px</SelectItem>
                              <SelectItem value="960px">960px</SelectItem>
                              <SelectItem value="100%">Full Width</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Border Radius: {themeConfig.layout.borderRadius}px</Label>
                          <Slider
                            value={[themeConfig.layout.borderRadius]}
                            onValueChange={(value) => updateThemeConfig('layout', 'borderRadius', value[0])}
                            max={20}
                            min={0}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Spacing: {themeConfig.layout.spacing}px</Label>
                          <Slider
                            value={[themeConfig.layout.spacing]}
                            onValueChange={(value) => updateThemeConfig('layout', 'spacing', value[0])}
                            max={32}
                            min={8}
                            step={4}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="features" className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="dark-mode"
                            checked={themeConfig.features.darkMode}
                            onCheckedChange={(checked) => updateThemeConfig('features', 'darkMode', checked)}
                          />
                          <Label htmlFor="dark-mode">Dark Mode Support</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="animations"
                            checked={themeConfig.features.animations}
                            onCheckedChange={(checked) => updateThemeConfig('features', 'animations', checked)}
                          />
                          <Label htmlFor="animations">CSS Animations</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="responsive"
                            checked={themeConfig.features.responsiveDesign}
                            onCheckedChange={(checked) => updateThemeConfig('features', 'responsiveDesign', checked)}
                          />
                          <Label htmlFor="responsive">Responsive Design</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="accessibility"
                            checked={themeConfig.features.accessibility}
                            onCheckedChange={(checked) => updateThemeConfig('features', 'accessibility', checked)}
                          />
                          <Label htmlFor="accessibility">Accessibility Features</Label>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Theme Preview Panel */}
            <div className="lg:col-span-1">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Theme Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Theme Name</Label>
                      <Input
                        value={themeConfig.name}
                        onChange={(e) => setThemeConfig(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter theme name"
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <Label>Color Palette</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col items-center space-y-1">
                          <div 
                            className="w-12 h-12 rounded-lg border-2 border-gray-300"
                            style={{ backgroundColor: themeConfig.colors.primary }}
                          />
                          <span className="text-xs">Primary</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div 
                            className="w-12 h-12 rounded-lg border-2 border-gray-300"
                            style={{ backgroundColor: themeConfig.colors.secondary }}
                          />
                          <span className="text-xs">Secondary</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div 
                            className="w-12 h-12 rounded-lg border-2 border-gray-300"
                            style={{ backgroundColor: themeConfig.colors.accent }}
                          />
                          <span className="text-xs">Accent</span>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <Label>Features</Label>
                      <div className="flex flex-wrap gap-2">
                        {themeConfig.features.darkMode && <Badge variant="secondary">Dark Mode</Badge>}
                        {themeConfig.features.animations && <Badge variant="secondary">Animations</Badge>}
                        {themeConfig.features.responsiveDesign && <Badge variant="secondary">Responsive</Badge>}
                        {themeConfig.features.accessibility && <Badge variant="secondary">Accessible</Badge>}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label>Typography</Label>
                      <div className="text-sm text-gray-600">
                        <p>Font: {themeConfig.typography.fontFamily}</p>
                        <p>Size: {themeConfig.typography.fontSize}px</p>
                        <p>Line Height: {themeConfig.typography.lineHeight}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThemeBuilder;
