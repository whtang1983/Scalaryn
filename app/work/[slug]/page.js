'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function WorkDetail() {
  const params = useParams();
  
  // Project data - in a real app, this would come from a CMS or API
  const projects = {
    'salesforce-crm': {
      title: 'Salesforce CRM Implementation',
      client: 'TechCorp Industries',
      service: 'Sales System',
      tools: 'Salesforce, Zapier, Slack',
      year: '2024',
      category: 'Sales System',
      gradient: 'from-blue-500 to-cyan-500',
      overview: 'TechCorp Industries needed a robust CRM system to manage their rapidly growing sales pipeline. We implemented a comprehensive Salesforce solution that automated lead tracking, improved sales forecasting, and integrated seamlessly with their existing tools.',
      challenges: [
        'Legacy data migration from multiple disparate systems',
        'Complex sales process with multiple stakeholders',
        'Need for real-time reporting and analytics',
        'Integration with existing marketing automation platform',
      ],
      process: 'We started with a comprehensive audit of their existing sales processes and data structures. Our team designed custom objects and workflows in Salesforce that matched their unique business requirements. The implementation included automated lead scoring, custom dashboards, and mobile access for the sales team.',
      results: 'The new CRM system resulted in a 45% increase in sales productivity, 30% reduction in administrative time, and improved forecast accuracy by 60%. The sales team now has complete visibility into their pipeline and can make data-driven decisions.',
    },
    'hubspot-marketing': {
      title: 'HubSpot Marketing Automation',
      client: 'GrowthBrand Co',
      service: 'Marketing System',
      tools: 'HubSpot, Google Analytics, WordPress',
      year: '2024',
      category: 'Marketing System',
      gradient: 'from-purple-500 to-pink-500',
      overview: 'GrowthBrand Co wanted to scale their marketing efforts without proportionally scaling their team. We implemented HubSpot Marketing Hub with advanced automation workflows, lead nurturing campaigns, and comprehensive analytics.',
      challenges: [
        'Disconnected marketing channels and data silos',
        'Manual lead qualification process',
        'Lack of marketing ROI visibility',
        'Inefficient content management and distribution',
      ],
      process: 'Our approach began with mapping their customer journey and identifying key touchpoints. We built automated workflows for lead nurturing, implemented smart content personalization, and created custom reports linking marketing activities to revenue. Integration with their CRM ensured seamless lead handoff to sales.',
      results: 'Marketing qualified leads increased by 85%, email engagement rates improved by 120%, and they achieved a 3x return on marketing investment. The marketing team now operates 40% more efficiently with clear attribution for every campaign.',
    },
    'asana-workflow': {
      title: 'Asana Project Workflow',
      client: 'DesignHub Studio',
      service: 'Project Management',
      tools: 'Asana, Figma, Google Workspace',
      year: '2024',
      category: 'Project Management',
      gradient: 'from-orange-500 to-red-500',
      overview: 'DesignHub Studio struggled with project visibility and team collaboration across multiple client projects. We designed and implemented a comprehensive Asana workspace with custom templates, automation rules, and portfolio management.',
      challenges: [
        'Projects frequently missed deadlines',
        'Poor visibility into team workload and capacity',
        'Inconsistent project delivery processes',
        'Difficulty tracking project profitability',
      ],
      process: 'We conducted workshops with their team to understand current workflows and pain points. Then we created standardized project templates, set up automation for routine tasks, implemented time tracking integration, and built custom dashboards for project health monitoring.',
      results: 'On-time project delivery improved from 60% to 95%, team productivity increased by 35%, and project visibility eliminated scheduling conflicts. The studio can now confidently take on 40% more projects with the same team size.',
    },
    'quickbooks-integration': {
      title: 'QuickBooks Financial Suite',
      client: 'Retail Solutions Inc',
      service: 'Finance System',
      tools: 'QuickBooks, Bill.com, Expensify',
      year: '2024',
      category: 'Finance System',
      gradient: 'from-green-500 to-emerald-500',
      overview: 'Retail Solutions Inc needed to modernize their financial operations and gain real-time insights into their cash flow. We implemented QuickBooks Online with integrated accounts payable, expense management, and financial reporting systems.',
      challenges: [
        'Manual invoice processing taking 3+ days',
        'Lack of real-time financial visibility',
        'Disconnected expense reporting system',
        'Difficulty with multi-location financial consolidation',
      ],
      process: 'We migrated their historical financial data to QuickBooks Online, implemented Bill.com for automated accounts payable, integrated Expensify for expense management, and created custom financial dashboards. We also automated bank reconciliation and set up approval workflows.',
      results: 'Invoice processing time reduced by 80%, financial close reduced from 10 days to 2 days, and real-time visibility into cash flow improved financial decision-making. The finance team reduced manual data entry by 90%.',
    },
  };

  const project = projects[params.slug] || projects['salesforce-crm'];

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <Link href="/#services">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {project.overview}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 relative aspect-video rounded-2xl overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-2xl font-bold">Project Preview</div>
          </div>
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-xl"
          >
            <Users className="text-indigo-400 mb-3" size={24} />
            <div className="text-gray-400 text-sm mb-1">Client</div>
            <div className="text-white font-semibold">{project.client}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-xl"
          >
            <Wrench className="text-indigo-400 mb-3" size={24} />
            <div className="text-gray-400 text-sm mb-1">Service</div>
            <div className="text-white font-semibold">{project.service}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-6 rounded-xl"
          >
            <Wrench className="text-indigo-400 mb-3" size={24} />
            <div className="text-gray-400 text-sm mb-1">Tools</div>
            <div className="text-white font-semibold">{project.tools}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass p-6 rounded-xl"
          >
            <Calendar className="text-indigo-400 mb-3" size={24} />
            <div className="text-gray-400 text-sm mb-1">Year</div>
            <div className="text-white font-semibold">{project.year}</div>
          </motion.div>
        </div>

        {/* Project Overview */}
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {project.overview}
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white mb-4">Key Challenges</h3>
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300">{challenge}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Process</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.process}
            </p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Results</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.results}
            </p>
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
            Ready to transform your business?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with the right systems.
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
            Start Your Project
          </button>
        </motion.div>
      </section>
    </div>
  );
}