
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Palette, Download, Loader2, Sparkles } from 'lucide-react';

interface ThemeOptions {
  style: string;
  colorScheme: string;
  layout: string;
  components: string;
  modules: string[];
}

const ThemeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [options, setOptions] = useState<ThemeOptions>({
    style: '',
    colorScheme: '',
    layout: '',
    components: '',
    modules: []
  });

  const steps = [
    { id: 1, title: 'Style', description: 'Choose your design style' },
    { id: 2, title: 'Colors', description: 'Pick your color scheme' },
    { id: 3, title: 'Layout', description: 'Select layout preference' },
    { id: 4, title: 'Components', description: 'Choose component style' },
    { id: 5, title: 'Modules', description: 'Select modules to include' }
  ];

  const styleOptions = [
    { id: 'modern', name: 'Modern', description: 'Clean and contemporary' },
    { id: 'classic', name: 'Classic', description: 'Timeless and elegant' },
    { id: 'minimalist', name: 'Minimalist', description: 'Simple and focused' },
    { id: 'bold', name: 'Bold', description: 'Vibrant and striking' },
    { id: 'professional', name: 'Professional', description: 'Corporate and polished' }
  ];

  const colorOptions = [
    { id: 'blue', name: 'Ocean Blue', description: 'Calm and trustworthy' },
    { id: 'green', name: 'Nature Green', description: 'Fresh and growth-focused' },
    { id: 'purple', name: 'Royal Purple', description: 'Creative and luxurious' },
    { id: 'orange', name: 'Sunset Orange', description: 'Energetic and warm' },
    { id: 'monochrome', name: 'Monochrome', description: 'Black, white, and grays' }
  ];

  const layoutOptions = [
    { id: 'sidebar', name: 'Sidebar', description: 'Navigation on the side' },
    { id: 'topbar', name: 'Top Navigation', description: 'Header-based navigation' },
    { id: 'centered', name: 'Centered', description: 'Content in the center' },
    { id: 'grid', name: 'Grid Layout', description: 'Card-based grid system' },
    { id: 'dashboard', name: 'Dashboard', description: 'Analytics-focused layout' }
  ];

  const componentOptions = [
    { id: 'rounded', name: 'Rounded', description: 'Soft curved corners' },
    { id: 'sharp', name: 'Sharp', description: 'Clean straight edges' },
    { id: 'outlined', name: 'Outlined', description: 'Border-focused design' },
    { id: 'filled', name: 'Filled', description: 'Solid background style' },
    { id: 'glass', name: 'Glassmorphism', description: 'Translucent effects' }
  ];

  const moduleOptions = [
    { id: 'auth', name: 'Authentication', description: 'User login system' },
    { id: 'dashboard', name: 'Dashboard', description: 'Analytics overview' },
    { id: 'profile', name: 'User Profile', description: 'User management' },
    { id: 'settings', name: 'Settings', description: 'App configuration' },
    { id: 'notifications', name: 'Notifications', description: 'Alert system' }
  ];

  const handleOptionSelect = (category: keyof ThemeOptions, value: string) => {
    if (category === 'modules') {
      setOptions(prev => ({
        ...prev,
        modules: prev.modules.includes(value)
          ? prev.modules.filter(m => m !== value)
          : [...prev.modules, value]
      }));
    } else {
      setOptions(prev => ({ ...prev, [category]: value }));
    }
  };

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return options.style !== '';
      case 2: return options.colorScheme !== '';
      case 3: return options.layout !== '';
      case 4: return options.components !== '';
      case 5: return options.modules.length > 0;
      default: return false;
    }
  };

  const generateTheme = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(options)
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'custom-theme.zip';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Theme generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const renderStepContent = () => {
    const optionsList = {
      1: { options: styleOptions, key: 'style' as keyof ThemeOptions },
      2: { options: colorOptions, key: 'colorScheme' as keyof ThemeOptions },
      3: { options: layoutOptions, key: 'layout' as keyof ThemeOptions },
      4: { options: componentOptions, key: 'components' as keyof ThemeOptions },
      5: { options: moduleOptions, key: 'modules' as keyof ThemeOptions }
    };

    const { options: stepOptions, key } = optionsList[currentStep as keyof typeof optionsList];

    return (
      <div className="space-y-4">
        {stepOptions.map((option) => (
          <Card
            key={option.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              key === 'modules'
                ? options.modules.includes(option.id)
                  ? 'ring-2 ring-primary bg-primary/5'
                  : 'hover:bg-accent/50'
                : options[key] === option.id
                ? 'ring-2 ring-primary bg-primary/5'
                : 'hover:bg-accent/50'
            }`}
            onClick={() => handleOptionSelect(key, option.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg">{option.name}</h4>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </div>
                {key === 'modules' && options.modules.includes(option.id) && (
                  <Badge variant="default">Selected</Badge>
                )}
                {key !== 'modules' && options[key] === option.id && (
                  <Badge variant="default">Selected</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Theme Builder
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Create your perfect theme in 5 simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      currentStep === step.id
                        ? 'bg-primary text-primary-foreground'
                        : currentStep > step.id
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {step.id}
                  </div>
                  <span className="text-xs mt-1 text-center max-w-16">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 h-0.5 ${
                      currentStep > step.id ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {steps[currentStep - 1].title}
            </CardTitle>
            <CardDescription className="text-lg">
              {steps[currentStep - 1].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="max-w-3xl mx-auto">
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-8"
          >
            Previous
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Step {currentStep} of {steps.length}
          </div>

          {currentStep < 5 ? (
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="px-8"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={generateTheme}
              disabled={!canProceed() || isGenerating}
              className="px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Theme
                </>
              )}
            </Button>
          )}
        </div>

        {/* Summary */}
        {currentStep === 5 && (
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Theme Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium">Style:</span>
                  <p className="text-muted-foreground">{options.style}</p>
                </div>
                <div>
                  <span className="font-medium">Colors:</span>
                  <p className="text-muted-foreground">{options.colorScheme}</p>
                </div>
                <div>
                  <span className="font-medium">Layout:</span>
                  <p className="text-muted-foreground">{options.layout}</p>
                </div>
                <div>
                  <span className="font-medium">Components:</span>
                  <p className="text-muted-foreground">{options.components}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="font-medium">Modules:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {options.modules.map(module => (
                    <Badge key={module} variant="secondary">{module}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ThemeBuilder;
