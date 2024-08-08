import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const Assessment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    <Step1 key={0} onNext={nextStep} />,
    <Step2 key={1} onNext={nextStep} onPrevious={previousStep} />,
    <Step3 key={2} onNext={nextStep} onPrevious={previousStep} />,
    <Step4 key={3} onNext={nextStep} onPrevious={previousStep} />,
  ];

  return <View style={styles.container}>{steps[currentStep]}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Assessment;
