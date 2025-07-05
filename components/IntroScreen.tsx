import { ArrowRight, Shield, CreditCard, PieChart, Smartphone, Users, Zap } from 'lucide-react'
import Link from "next/link"

const IntroScreen = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <div className="w-full max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex-center">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Horizon Banking
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the future of banking with our comprehensive financial management platform. Secure, intuitive,
            and designed for your financial success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-in">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
            <p className="text-gray-600">
              Your financial data is protected with enterprise-grade encryption and multi-factor authentication
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex-center mb-4">
              <PieChart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Analytics</h3>
            <p className="text-gray-600">
              Get insights into your spending patterns with AI-powered analytics and personalized recommendations
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex-center mb-4">
              <CreditCard className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Accounts</h3>
            <p className="text-gray-600">
              Manage all your accounts in one place - checking, savings, credit cards, and investments
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex-center mb-4">
              <Smartphone className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile First</h3>
            <p className="text-gray-600">
              Seamless experience across all devices with our responsive design and mobile app
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex-center mb-4">
              <Zap className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Transfers</h3>
            <p className="text-gray-600">
              Send money instantly to friends and family with our fast and secure transfer system
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex-center mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Get help whenever you need it with our round-the-clock customer support team
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                500K+
              </div>
              <div className="text-gray-600">Trusted Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                $2.5B+
              </div>
              <div className="text-gray-600">Transactions Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of thousands of users who trust Horizon Banking for their financial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-in">
              <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300">
                Open Account Today
              </button>
            </Link>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent font-semibold rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroScreen
