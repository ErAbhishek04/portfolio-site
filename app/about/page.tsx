"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Code,
  Cloud,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  FileText,
  Printer,
  Sparkles,
  Phone,
  Layers,
} from "lucide-react";
import { Navigation } from "../components/nav";

export default function AboutPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen pb-24 bg-gradient-to-tl from-black via-zinc-900 to-black text-zinc-300 print:bg-white print:text-black">
      <div className="print:hidden">
        <Navigation />
      </div>

      <main className="px-6 pt-28 mx-auto max-w-5xl lg:px-8">
        {/* Header Profile Section */}
        <div className="flex flex-col gap-6 pb-8 border-b border-zinc-800 print:border-zinc-300 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wide uppercase text-zinc-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Data Science & ML Engineering</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 print:text-black sm:text-5xl font-display">
              Abhishek Takawane
            </h1>
            <p className="mt-2 text-lg text-zinc-400 print:text-zinc-700 font-medium">
              Associate Data Scientist @ KONE
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-zinc-500 print:text-zinc-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-zinc-400 print:text-zinc-600" />
                Pune, India
              </span>
              <a
                href="mailto:takawaneabhishek04@gmail.com"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-400 print:text-zinc-600" />
                takawaneabhishek04@gmail.com
              </a>
              <a
                href="tel:9325212524"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-zinc-400 print:text-zinc-600" />
                +91 9325212524
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 print:hidden">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium border rounded-md border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-200 transition-colors shadow-sm"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <a
              href="https://github.com/ErAbhishek04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium border rounded-md border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-200 transition-colors shadow-sm"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-takawane-aa1161225/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium border rounded-md border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-200 transition-colors shadow-sm"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Summary Card */}
        <section className="mt-10">
          <div className="p-6 border rounded-xl border-zinc-800 bg-zinc-900/40 print:border-zinc-300 print:bg-transparent">
            <h2 className="flex items-center gap-2 text-base font-semibold tracking-wide uppercase text-zinc-200 print:text-black">
              <Sparkles className="w-4 h-4 text-zinc-400" />
              Executive Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300 print:text-zinc-800 md:text-base">
              Data Scientist specializing in data and cloud-based solutions, building and deploying ML, GenAI, and RAG systems in production on AWS and Databricks. Extensive experience in predictive maintenance forecasting, reliable equipment lifecycle management, and scalable cloud architectures.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-12">
          <div className="flex items-center gap-2 pb-3 mb-6 border-b border-zinc-800 print:border-zinc-300">
            <Briefcase className="w-5 h-5 text-zinc-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100 print:text-black">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-8">
            {/* KONE - Associate Data Scientist */}
            <div className="p-6 border rounded-xl border-zinc-800 bg-zinc-900/30 print:border-zinc-300 print:bg-transparent">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 print:text-black">
                    Associate Data Scientist
                  </h3>
                  <p className="text-sm font-medium text-zinc-400 print:text-zinc-700">
                    KONE · Pune, India
                  </p>
                </div>
                <span className="inline-block px-2.5 py-1 text-xs font-mono rounded bg-zinc-800 text-zinc-300 print:border print:border-zinc-300">
                  June 2025 – Present
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Python", "SQL", "PostgreSQL", "AWS", "PySpark", "Databricks", "Docker"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs font-medium rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 print:border-zinc-400 print:bg-zinc-100 print:text-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-6">
                {/* Project 1 */}
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-zinc-200 print:text-zinc-900">
                    Planner and Predictive Repair (ServiceNeed)
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm list-disc list-inside text-zinc-400 print:text-zinc-700">
                    <li>
                      Developed component-level ServiceNeed forecasting model on 15+ years of historical elevator and escalator service data, enabling early identification of high-risk components and prioritized maintenance scheduling.
                    </li>
                    <li>
                      Engineered AWS S3 &rarr; Databricks data pipeline for the ServiceNeed model, performing preprocessing and cross-system validation across source systems, with outputs surfaced via Power BI.
                    </li>
                    <li>
                      Integrated PDM, CRM, and costing tools into the recommendation lifecycle, ensuring data assurance and consistency across systems.
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-zinc-200 print:text-zinc-900">
                    Lifecycle Management for Equipment
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm list-disc list-inside text-zinc-400 print:text-zinc-700">
                    <li>
                      Developed decision logic linking ML failure predictions to maintenance plan bundling via Weibull reliability modeling, estimating hazard rates and remaining useful life for elevator components.
                    </li>
                    <li>
                      Leading a schema redesign for the project while collaborating with the full-stack team to build a commercial engine mapping ML outputs to the frontend.
                    </li>
                    <li>
                      Writing decision-analytics logic that applies clustering to ML model outputs and integrates APIs for cost-tool mapping and business-rule enforcement.
                    </li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-zinc-200 print:text-zinc-900">
                    AWS EBA Clinica Dashboard
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm list-disc list-inside text-zinc-400 print:text-zinc-700">
                    <li>
                      Delivered a production dashboard end-to-end within a 3-day AWS Experience-Based Acceleration sprint, writing with React frontend and the Node.js backend service.
                    </li>
                    <li>
                      Designed and deployed the application to production on AWS, configuring the runtime environment, build pipeline, and release process within the sprint timeline.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* KONE - Data Analytics Intern */}
            <div className="p-6 border rounded-xl border-zinc-800 bg-zinc-900/30 print:border-zinc-300 print:bg-transparent">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 print:text-black">
                    Data Analytics Intern
                  </h3>
                  <p className="text-sm font-medium text-zinc-400 print:text-zinc-700">
                    KONE · Pune, India
                  </p>
                </div>
                <span className="inline-block px-2.5 py-1 text-xs font-mono rounded bg-zinc-800 text-zinc-300 print:border print:border-zinc-300">
                  June 2024 – May 2025
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Python", "Llama 3", "FAISS", "AWS", "Isolation Forest", "One-Class SVM"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs font-medium rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 print:border-zinc-400 print:bg-zinc-100 print:text-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm list-disc list-inside text-zinc-400 print:text-zinc-700">
                <li>
                  Built an end-to-end technical-document intelligence system using RAG, embeddings, and vector search over FAISS, enabling fast, accurate querying of technical equipment manuals and cutting manual lookup time.
                </li>
                <li>
                  Automated data-monitoring workflows on AWS to track pipeline outputs, detect schema and value changes, and flag data-quality issues before they reached downstream reporting.
                </li>
                <li>
                  Developed anomaly-detection and KPI monitoring systems for production analytics, applying statistical and ML-based outlier detection to validate data integrity across pipelines.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-12">
          <div className="flex items-center gap-2 pb-3 mb-6 border-b border-zinc-800 print:border-zinc-300">
            <GraduationCap className="w-5 h-5 text-zinc-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100 print:text-black">
              Education
            </h2>
          </div>

          <div className="p-6 border rounded-xl border-zinc-800 bg-zinc-900/30 print:border-zinc-300 print:bg-transparent">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-base font-semibold text-zinc-100 print:text-black">
                  Master of Technology in Computer Science Artificial Intelligence & Machine Learning
                </h3>
                <p className="text-sm text-zinc-400 print:text-zinc-700">
                  Indian Institute of Information Technology (IIIT) · Pune, India
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 print:border-emerald-600 print:text-emerald-800">
                  CGPA: 8.24
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Grid */}
        <section className="mt-12">
          <div className="flex items-center gap-2 pb-3 mb-6 border-b border-zinc-800 print:border-zinc-300">
            <Code className="w-5 h-5 text-zinc-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100 print:text-black">
              Technical Skills
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Programming */}
            <div className="p-5 border rounded-lg border-zinc-800 bg-zinc-900/30 print:border-zinc-300">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200 print:text-black">
                <Code className="w-4 h-4 text-zinc-400" />
                Programming
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Python", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* LLM & AI */}
            <div className="p-5 border rounded-lg border-zinc-800 bg-zinc-900/30 print:border-zinc-300">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200 print:text-black">
                <Sparkles className="w-4 h-4 text-zinc-400" />
                LLM & GenAI
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Llama 3", "RAG", "LangChain", "LangGraph", "FAISS", "Vector DBs", "MCP"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Libraries & Frameworks */}
            <div className="p-5 border rounded-lg border-zinc-800 bg-zinc-900/30 print:border-zinc-300">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200 print:text-black">
                <Layers className="w-4 h-4 text-zinc-400" />
                Libraries & Frameworks
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["FastAPI", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div className="p-5 border rounded-lg border-zinc-800 bg-zinc-900/30 print:border-zinc-300">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200 print:text-black">
                <Cloud className="w-4 h-4 text-zinc-400" />
                Cloud (AWS)
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["AWS S3", "Lambda", "API Gateway", "Athena", "Glue", "SageMaker", "Step Functions"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data & Platforms */}
            <div className="p-5 border rounded-lg border-zinc-800 bg-zinc-900/30 print:border-zinc-300">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200 print:text-black">
                <Database className="w-4 h-4 text-zinc-400" />
                Data & Platforms
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Databricks", "PySpark", "MLflow", "PostgreSQL", "Docker"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Visualization & Tools */}
            <div className="p-5 border rounded-lg border-zinc-800 bg-zinc-900/30 print:border-zinc-300">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200 print:text-black">
                <FileText className="w-4 h-4 text-zinc-400" />
                Tools & Visualization
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Power BI", "Claude Opus", "AWS Kiro", "Git", "Next.js", "React"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolios & Online Profiles */}
        <section className="mt-12">
          <div className="flex items-center gap-2 pb-3 mb-6 border-b border-zinc-800 print:border-zinc-300">
            <ExternalLink className="w-5 h-5 text-zinc-400" />
            <h2 className="text-xl font-bold tracking-tight text-zinc-100 print:text-black">
              Profiles & Portfolios
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="https://github.com/ErAbhishek04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border rounded-lg border-zinc-800 bg-zinc-900/30 hover:border-zinc-600 hover:bg-zinc-800/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-zinc-300 group-hover:text-white" />
                <div>
                  <div className="text-sm font-semibold text-zinc-100">GitHub</div>
                  <div className="text-xs text-zinc-500">ErAbhishek04</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-takawane-aa1161225/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border rounded-lg border-zinc-800 bg-zinc-900/30 hover:border-zinc-600 hover:bg-zinc-800/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-zinc-300 group-hover:text-white" />
                <div>
                  <div className="text-sm font-semibold text-zinc-100">LinkedIn</div>
                  <div className="text-xs text-zinc-500">abhishek-takawane</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" />
            </a>

            <a
              href="https://www.kaggle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border rounded-lg border-zinc-800 bg-zinc-900/30 hover:border-zinc-600 hover:bg-zinc-800/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="font-black text-sm text-sky-400">K</span>
                <div>
                  <div className="text-sm font-semibold text-zinc-100">Kaggle</div>
                  <div className="text-xs text-zinc-500">Machine Learning</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" />
            </a>

            <a
              href="https://huggingface.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border rounded-lg border-zinc-800 bg-zinc-900/30 hover:border-zinc-600 hover:bg-zinc-800/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-base">🤗</span>
                <div>
                  <div className="text-sm font-semibold text-zinc-100">Hugging Face</div>
                  <div className="text-xs text-zinc-500">Models & Datasets</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" />
            </a>
          </div>
        </section>

        {/* Bottom CTA to Projects & Contact */}
        <section className="flex flex-col gap-4 mt-16 p-6 border rounded-xl border-zinc-800 bg-zinc-900/20 sm:flex-row sm:items-center sm:justify-between print:hidden">
          <div>
            <h3 className="text-base font-semibold text-zinc-100">
              Interested in seeing my work or collaborating?
            </h3>
            <p className="text-sm text-zinc-400">
              Explore my technical projects or send a message directly.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="px-4 py-2 text-xs font-semibold text-zinc-900 bg-zinc-100 rounded-md hover:bg-white transition-colors"
            >
              View Projects &rarr;
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-xs font-medium border rounded-md border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
