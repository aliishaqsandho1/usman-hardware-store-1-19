
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, Check, Download, Palette, Layout, Code, Zap } from "lucide-react";
import { toast } from "sonner";

interface ThemeConfig {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  layout: string;
  typography: string;
  spacing: number[];
  borderRadius: number[];
  features: string[];
  modules: string[];
}

interface GeneratedTheme {
  files: Array<{
    name: string;
    content: string;
    type: string;
  }>;
  preview_url?: string;
}

const ThemeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [generatedTheme, setGeneratedTheme] = useState<GeneratedTheme | null>(null);
  
  const [config, setConfig] = useState<ThemeConfig>({
    name: "",
    primaryColor: "#3b82f6",
    secondaryColor: "#64748b",
    accentColor: "#10b981",
    layout: "modern",
    typography: "sans-serif",
    spacing: [16],
    borderRadius: [8],
    features: [],
    modules: []
  });

  const steps = [
    { id: 1, title: "Basic Info", icon: Palette },
    { id: 2, title: "Design", icon: Layout },
    { id: 3, title: "Features", icon: Zap },
    { id: 4, title: "Modules", icon: Code },
    { id: 5, title: "Generate", icon: Download }
  ];

  const layoutOptions = [
    { value: "modern", label: "Modern", description: "Clean and minimal design" },
    { value: "classic", label: "Classic", description: "Traditional layout with sidebars" },
    { value: "creative", label: "Creative", description: "Unique and artistic design" }
  ];

  const typographyOptions = [
    { value: "sans-serif", label: "Sans Serif", description: "Clean and modern" },
    { value: "serif", label: "Serif", description: "Traditional and elegant" },
    { value: "monospace", label: "Monospace", description: "Technical and precise" }
  ];

  const featureOptions = [
    { id: "responsive", label: "Responsive Design", description: "Mobile-first responsive layout" },
    { id: "animations", label: "Smooth Animations", description: "CSS transitions and animations" },
    { id: "accessibility", label: "Accessibility", description: "WCAG compliant features" },
    { id: "dark-mode", label: "Dark Mode", description: "Built-in dark theme support" },
    { id: "rtl", label: "RTL Support", description: "Right-to-left language support" },
    { id: "performance", label: "Performance Optimized", description: "Lightweight and fast loading" }
  ];

  const moduleOptions = [
    { id: "header", label: "Header & Navigation", description: "Top navigation and branding" },
    { id: "hero", label: "Hero Section", description: "Main banner with call-to-action" },
    { id: "about", label: "About Section", description: "Company or personal information" },
    { id: "services", label: "Services/Products", description: "Showcase offerings" },
    { id: "testimonials", label: "Testimonials", description: "Customer reviews and feedback" },
    { id: "pricing", label: "Pricing", description: "Pricing tables and plans" },
    { id: "gallery", label: "Gallery", description: "Image showcase and portfolio" },
    { id: "contact", label: "Contact Form", description: "Contact information and form" },
    { id: "footer", label: "Footer", description: "Bottom section with links" },
    { id: "cta", label: "Call to Action", description: "Conversion-focused sections" }
  ];

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const downloadTheme = () => {
    if (!generatedTheme) return;

    try {
      // Create a zip-like structure by downloading individual files
      generatedTheme.files.forEach((file, index) => {
        const blob = new Blob([file.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        
        // Stagger downloads slightly to avoid browser blocking
        setTimeout(() => {
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }, index * 100);
      });

      toast.success("Theme files downloaded successfully!");
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to download theme files");
    }
  };

  const handleGenerate = async () => {
    if (isGenerated) {
      downloadTheme();
      return;
    }

    setIsGenerating(true);
    
    try {
      const response = await fetch('https://theme-builder-api.lovableproject.com/generate-theme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Generated theme data:", data);
      
      setGeneratedTheme(data);
      setIsGenerated(true);
      
      // Auto-download after generation
      setTimeout(() => {
        downloadTheme();
      }, 500);
      
      toast.success("Theme generated and downloaded successfully!");
      
    } catch (error) {
      console.error("Generation error:", error);
      toast.error("Failed to generate theme. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFeatureToggle = (featureId: string, checked: boolean) => {
    setConfig(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, featureId]
        : prev.features.filter(f => f !== featureId)
    }));
  };

  const handleModuleToggle = (moduleId: string, checked: boolean) => {
    setConfig(prev => ({
      ...prev,
      modules: checked 
        ? [...prev.modules, moduleId]
        : prev.modules.filter(m => m !== moduleId)
    }));
  };

  const getSelectedFeatures = () => {
    return featureOptions.filter(feature => config.features.includes(feature.id));
  };

  const getSelectedModules = () => {
    return moduleOptions.filter(module => config.modules.includes(module.id));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="theme-name">Theme Name</Label>
              <Input
                id="theme-name"
                placeholder="Enter your theme name"
                value={config.name}
                onChange={(e) => setConfig(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="primary-color"
                    type="color"
                    value={config.primaryColor}
                    onChange={(e) => setConfig(prev => ({ ...prev, primaryColor: e.target.value }))}
                    className="w-16 h-10"
                  />
                  <Input
                    value={config.primaryColor}
                    onChange={(e) => setConfig(prev => ({ ...prev, primaryColor: e.target.value }))}
                    placeholder="#3b82f6"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="secondary-color">Secondary Color</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="secondary-color"
                    type="color"
                    value={config.secondaryColor}
                    onChange={(e) => setConfig(prev => ({ ...prev, secondaryColor: e.target.value }))}
                    className="w-16 h-10"
                  />
                  <Input
                    value={config.secondaryColor}
                    onChange={(e) => setConfig(prev => ({ ...prev, secondaryColor: e.target.value }))}
                    placeholder="#64748b"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="accent-color">Accent Color</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="accent-color"
                    type="color"
                    value={config.accentColor}
                    onChange={(e) => setConfig(prev => ({ ...prev, accentColor: e.target.value }))}
                    className="w-16 h-10"
                  />
                  <Input
                    value={config.accentColor}
                    onChange={(e) => setConfig(prev => ({ ...prev, accentColor: e.target.value }))}
                    placeholder="#10b981"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Layout Style</Label>
              <RadioGroup 
                value={config.layout} 
                onValueChange={(value) => setConfig(prev => ({ ...prev, layout: value }))}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {layoutOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <div className="flex-1">
                        <Label htmlFor={option.value} className="font-medium">{option.label}</Label>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Typography</Label>
              <RadioGroup 
                value={config.typography} 
                onValueChange={(value) => setConfig(prev => ({ ...prev, typography: value }))}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {typographyOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value={option.value} id={`typo-${option.value}`} />
                      <div className="flex-1">
                        <Label htmlFor={`typo-${option.value}`} className="font-medium">{option.label}</Label>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Spacing: {config.spacing[0]}px</Label>
                <Slider
                  value={config.spacing}
                  onValueChange={(value) => setConfig(prev => ({ ...prev, spacing: value }))}
                  max={32}
                  min={8}
                  step={4}
                  className="w-full"
                />
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold">Border Radius: {config.borderRadius[0]}px</Label>
                <Slider
                  value={config.borderRadius}
                  onValueChange={(value) => setConfig(prev => ({ ...prev, borderRadius: value }))}
                  max={24}
                  min={0}
                  step={2}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Features & Functionality</h3>
                <p className="text-muted-foreground">Choose the features you want to include in your theme</p>
              </div>
              {config.features.length > 0 && (
                <Badge variant="secondary" className="text-sm">
                  {config.features.length} selected
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featureOptions.map((feature) => (
                <Card key={feature.id} className={`cursor-pointer transition-all hover:shadow-md ${config.features.includes(feature.id) ? 'ring-2 ring-primary bg-primary/5' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id={feature.id}
                        checked={config.features.includes(feature.id)}
                        onCheckedChange={(checked) => handleFeatureToggle(feature.id, checked as boolean)}
                        className="mt-1"
                      />
                      <div className="flex-1 min-w-0">
                        <Label htmlFor={feature.id} className="font-medium cursor-pointer">
                          {feature.label}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {feature.description}
                        </p>
                      </div>
                      {config.features.includes(feature.id) && (
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {getSelectedFeatures().length > 0 && (
              <Card className="bg-muted/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Selected Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {getSelectedFeatures().map((feature) => (
                      <Badge key={feature.id} variant="default" className="text-xs">
                        {feature.label}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Theme Modules</h3>
                <p className="text-muted-foreground">Select the components you want to include</p>
              </div>
              {config.modules.length > 0 && (
                <Badge variant="secondary" className="text-sm">
                  {config.modules.length} selected
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {moduleOptions.map((module) => (
                <Card key={module.id} className={`cursor-pointer transition-all hover:shadow-md ${config.modules.includes(module.id) ? 'ring-2 ring-primary bg-primary/5' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id={module.id}
                        checked={config.modules.includes(module.id)}
                        onCheckedChange={(checked) => handleModuleToggle(module.id, checked as boolean)}
                        className="mt-1"
                      />
                      <div className="flex-1 min-w-0">
                        <Label htmlFor={module.id} className="font-medium cursor-pointer">
                          {module.label}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {module.description}
                        </p>
                      </div>
                      {config.modules.includes(module.id) && (
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {getSelectedModules().length > 0 && (
              <Card className="bg-muted/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Selected Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {getSelectedModules().map((module) => (
                      <Badge key={module.id} variant="default" className="text-xs">
                        {module.label}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Download className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ready to Generate</h3>
                <p className="text-muted-foreground">
                  {isGenerated 
                    ? "Your theme has been generated and is ready for download!"
                    : "Click the button below to generate your custom theme"
                  }
                </p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Theme Configuration Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Name:</span> {config.name || "Untitled Theme"}
                  </div>
                  <div>
                    <span className="font-medium">Layout:</span> {config.layout}
                  </div>
                  <div>
                    <span className="font-medium">Typography:</span> {config.typography}
                  </div>
                  <div>
                    <span className="font-medium">Features:</span> {config.features.length}
                  </div>
                  <div>
                    <span className="font-medium">Modules:</span> {config.modules.length}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: config.primaryColor }}></div>
                    <span className="text-sm">Primary</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: config.secondaryColor }}></div>
                    <span className="text-sm">Secondary</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: config.accentColor }}></div>
                    <span className="text-sm">Accent</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-4">Theme Builder</h1>
          <p className="text-center text-muted-foreground">
            Create your perfect theme in just a few steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                    currentStep >= step.id 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : 'border-muted bg-background text-muted-foreground'
                  }`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs mt-2 text-center font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 transition-all ${
                    currentStep > step.id ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Step {currentStep}: {steps[currentStep - 1]?.title}</CardTitle>
            <CardDescription>
              {currentStep === 1 && "Set up the basic information for your theme"}
              {currentStep === 2 && "Choose your design preferences and styling options"}
              {currentStep === 3 && "Select the features you want to include"}
              {currentStep === 4 && "Pick the modules and components for your theme"}
              {currentStep === 5 && "Review your configuration and generate your theme"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrev} 
            disabled={currentStep === 1}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          {currentStep < 5 ? (
            <Button 
              onClick={handleNext}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              size="lg"
              className="flex items-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                  <span>Generating...</span>
                </>
              ) : isGenerated ? (
                <>
                  <Download className="h-4 w-4" />
                  <span>Download Theme</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>Generate Theme</span>
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeBuilder;
