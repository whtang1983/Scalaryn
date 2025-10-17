'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Zap, Puzzle, Play, CheckCircle } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

const BlueprintDetail = () => {
  const params = useParams();
  const router = useRouter();
  
  const blueprints = {
    'lead-to-proposal': {
      title: 'Automated Lead → Proposal Flow',
      category: 'Sales System',
      gradient: 'from-blue-500 to-cyan-500',
      demoVideo: 'https://www.loom.com/embed/your-video-id',
      tagline: 'Turn incoming leads into branded proposals in minutes, not hours.',
      
      whatItDoes: [
        'Captures leads from your website form or CRM',
        'Automatically qualifies leads based on custom criteria',
        'Generates personalized proposal documents with your branding',
        'Sends proposals via email with tracking and e-signature capability',
        'Notifies your team when proposals are viewed or signed',
      ],
      
      toolsUsed: [
        { name: 'Airtable', purpose: 'Lead database & tracking' },
        { name: 'Zapier', purpose: 'Workflow automation' },
        { name: 'PandaDoc', purpose: 'Proposal generation & e-signatures' },
        { name: 'Slack', purpose: 'Team notifications' },
      ],
      
      complexity: 'Medium',
      timeline: '2-3 weeks',
      
      howItWorks: [
        { step: 'Lead enters system', description: 'Form submission or CRM trigger captures lead data' },
        { step: 'Auto-qualification', description: 'System scores lead based on your criteria (budget, need, timeline)' },
        { step: 'Proposal generation', description: 'Pre-built template populates with lead-specific information' },
        { step: 'Automated delivery', description: 'Proposal sent to lead with tracking enabled' },
        { step: 'Real-time alerts', description: 'Team notified of views, comments, and signatures' },
      ],
      
      perfectFor: [
        'Service businesses with standardized offerings',
        'Teams spending 5+ hours/week on proposal creation',
        'Companies wanting to respond to leads within 24 hours',
      ],
    },
    
    'ai-outreach-engine': {
      title: 'AI-Powered Cold Outreach Engine',
      category: 'Marketing System',
      gradient: 'from-purple-500 to-pink-500',
      demoVideo: 'https://www.loom.com/embed/your-video-id',
      tagline: 'Generate personalized cold emails at scale using AI research.',
      
      whatItDoes: [
        'Researches prospects using AI to gather relevant context',
        'Generates personalized email copy based on prospect data',
        'Schedules and sends emails through your email account',
        'Tracks opens, clicks, and replies automatically',
        'Learns from responses to improve future outreach',
      ],
      
      toolsUsed: [
        { name: 'Clay', purpose: 'AI-powered prospect research' },
        { name: 'OpenAI API', purpose: 'Email personalization' },
        { name: 'Instantly.ai', purpose: 'Email sending & tracking' },
        { name: 'Google Sheets', purpose: 'Prospect list management' },
      ],
      
      complexity: 'Hard',
      timeline: '3-4 weeks',
      
      howItWorks: [
        { step: 'Import prospects', description: 'Upload list with company names and contact info' },
        { step: 'AI research', description: 'System gathers data about each prospect from web sources' },
        { step: 'Personalization', description: 'AI generates unique email copy for each prospect' },
        { step: 'Smart sending', description: 'Emails sent with optimal timing and warm-up protocols' },
        { step: 'Response handling', description: 'Positive replies flagged for manual follow-up' },
      ],
      
      perfectFor: [
        'B2B companies doing outbound sales',
        'Agencies looking to scale client acquisition',
        'Teams without dedicated SDRs',
      ],
    },
    
    'client-onboarding-automation': {
      title: 'Client Onboarding Automation',
      category: 'Project Management',
      gradient: 'from-orange-500 to-red-500',
      demoVideo: 'https://www.loom.com/embed/your-video-id',
      tagline: 'Launch new client projects in under 5 minutes with zero manual setup.',
      
      whatItDoes: [
        'Creates project workspace with all necessary tasks and templates',
        'Sends welcome email sequence to new clients',
        'Schedules kickoff meeting and adds to calendar',
        'Sets up shared folders and document repositories',
        'Assigns team members and notifies relevant stakeholders',
      ],
      
      toolsUsed: [
        { name: 'ClickUp', purpose: 'Project management & task automation' },
        { name: 'Gmail', purpose: 'Client communication' },
        { name: 'Google Drive', purpose: 'Document storage & sharing' },
        { name: 'Calendly', purpose: 'Meeting scheduling' },
      ],
      
      complexity: 'Easy',
      timeline: '1-2 weeks',
      
      howItWorks: [
        { step: 'Trigger event', description: 'New client marked as "won" in CRM or form submitted' },
        { step: 'Workspace creation', description: 'Project structure built from master template' },
        { step: 'Welcome sequence', description: 'Series of onboarding emails sent over first week' },
        { step: 'Resource setup', description: 'Shared folders created and access granted' },
        { step: 'Team activation', description: 'Relevant team members assigned and notified' },
      ],
      
      perfectFor: [
        'Agencies with repeatable project structures',
        'Consultants onboarding multiple clients per month',
        'Teams wanting consistent client experience',
      ],
    },
    
    'auto-invoice-payment': {
      title: 'Auto-Invoice & Payment Workflow',
      category: 'Finance System',
      gradient: 'from-green-500 to-emerald-500',
      demoVideo: 'https://www.loom.com/embed/your-video-id',
      tagline: 'Get paid faster with automated invoicing, reminders, and payment processing.',
      
      whatItDoes: [
        'Generates invoices automatically based on completed work or milestones',
        'Sends invoices to clients with payment links',
        'Tracks invoice status (sent, viewed, paid, overdue)',
        'Sends automated payment reminders before and after due dates',
        'Records payments and updates accounting system',
      ],
      
      toolsUsed: [
        { name: 'Stripe', purpose: 'Payment processing' },
        { name: 'QuickBooks', purpose: 'Accounting & bookkeeping' },
        { name: 'Make.com', purpose: 'Workflow automation' },
        { name: 'Airtable', purpose: 'Invoice tracking' },
      ],
      
      complexity: 'Medium',
      timeline: '2-3 weeks',
      
      howItWorks: [
        { step: 'Invoice trigger', description: 'Project completion, monthly retainer, or manual trigger' },
        { step: 'Invoice creation', description: 'System generates invoice with line items and payment terms' },
        { step: 'Client delivery', description: 'Invoice sent via email with secure payment link' },
        { step: 'Auto-reminders', description: 'Gentle reminders sent 3 days before and after due date' },
        { step: 'Payment sync', description: 'Successful payments recorded in accounting system automatically' },
      ],
      
      perfectFor: [
        'Service businesses with recurring or milestone-based billing',
        'Teams chasing late payments manually',
        'Companies wanting to reduce days sales outstanding (DSO)',
      ],
    },
  };

  const blueprint = blueprints[params.slug] || blueprints['lead-to-proposal'];

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <button
          onClick={() => router.push('/')}
          className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blueprints
        </button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            {blueprint.category}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            {blueprint.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {blueprint.tagline}
          </p>
        </motion.div>

        {/* Demo Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 relative aspect-video rounded-2xl overflow-hidden glass"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${blueprint.gradient} opacity-20`}></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Play className="text-white mb-4" size={64} />
            <div className="text-white text-xl font-semibold">Watch 3-Minute Demo</div>
            <div className="text-gray-400 text-sm mt-2">Coming soon - Loom walkthrough</div>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-xl"
          >
            <Clock className="text-indigo-400 mb-3" size={24} />
            <div className="text-gray-400 text-sm mb-1">Setup Timeline</div>
            <div className="text-white font-semibold text-xl">{blueprint.timeline}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-xl"
          >
            <Zap className="text-indigo-400 mb-3" size={24} />
            <div className="text-gray-400 text-sm mb-1">Complexity</div>
            <div className="text-white font-semibold text-xl">{blueprint.complexity}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-6 rounded-xl"
          >
            <Puzzle className="text-indigo-400 mb-3" size={24} />
            <div className="text-gray-400 text-sm mb-1">Integrations</div>
            <div className="text-white font-semibold text-xl">{blueprint.toolsUsed.length} tools</div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* What It Does */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">What This System Does</h2>
            <div className="space-y-3">
              {blueprint.whatItDoes.map((item, index) => (
                <div key={index} className="flex items-start glass p-4 rounded-lg">
                  <CheckCircle className="text-indigo-400 mr-3 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Tools & Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blueprint.toolsUsed.map((tool, index) => (
                <div key={index} className="glass p-5 rounded-lg">
                  <div className="text-white font-semibold mb-1">{tool.name}</div>
                  <div className="text-gray-400 text-sm">{tool.purpose}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
            <div className="space-y-4">
              {blueprint.howItWorks.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-400 font-semibold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold mb-1">{item.step}</div>
                    <div className="text-gray-400">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Perfect For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Perfect For</h2>
            <div className="space-y-3">
              {blueprint.perfectFor.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Something Similar?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            These blueprints show what's possible. We'll work with your existing tech stack and processes to achieve similar results tailored to your business.
          </p>
          <button 
            onClick={() => {
              if (window.Calendly) {
                window.Calendly.initPopupWidget({ url: 'https://calendly.com/benjamin-tang-scalaryn/30min' });
              }
            }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 font-medium"
          >
            Schedule Free Discovery Call
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default BlueprintDetail;