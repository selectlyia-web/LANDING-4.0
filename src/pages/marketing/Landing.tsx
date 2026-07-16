import { EmailCaptureSection } from '@components/marketing/EmailCaptureSection';
import { ExclusivitySection } from '@components/marketing/ExclusivitySection';
import { HeroSection } from '@components/marketing/HeroSection';
import { HowItWorksSection } from '@components/marketing/HowItWorksSection';
import { MobileCtaBar } from '@components/marketing/MobileCtaBar';
import { ProblemSection } from '@components/marketing/ProblemSection';
import { RevealSection } from '@components/marketing/RevealSection';
import { TransformSection } from '@components/marketing/TransformSection';

/**
 * Landing page — funil narrativo em 7 atos, um único destino: #acesso.
 * Cada seção é um componente de responsabilidade única; a página só compõe.
 * O padding inferior extra no mobile compensa a MobileCtaBar fixa.
 */
export function Landing(): React.JSX.Element {
  return (
    <div className="pb-24 md:pb-0">
      <HeroSection />
      <ProblemSection />
      <RevealSection />
      <HowItWorksSection />
      <TransformSection />
      <ExclusivitySection />
      <EmailCaptureSection />
      <MobileCtaBar />
    </div>
  );
}
