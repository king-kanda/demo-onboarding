"use client";
import { useNextStep } from 'nextstepjs';
import { LayoutDashboard, Pickaxe, FileSearch2, HatGlasses, MonitorCog } from 'lucide-react';

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-lg flex flex-col z-40">
      <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-2">MyApp</h2>
        <span className="text-xs text-gray-500 dark:text-gray-400">Dashboard</span>
      </div>
      <nav className="flex-1 px-6 py-4 space-y-2">
        <a  href="#dashboard-card" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-800 rounded-lg px-3 py-2 transition-colors">
          <LayoutDashboard /> <span>Dashboard</span>
        </a>
        <a href="#action-buttons" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-800 rounded-lg px-3 py-2 transition-colors">
          <Pickaxe /> <span>Actions</span>
        </a>
        <a id='product-documents' href="#" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-800 rounded-lg px-3 py-2 transition-colors">
          <FileSearch2 /> <span>Product Documents</span>
        </a>
        <a id='virtual-agent' href="#" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-800 rounded-lg px-3 py-2 transition-colors">
          <HatGlasses /> <span>Virtual Agent</span>
        </a>
        <a id='settings' href="#" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-800 rounded-lg px-3 py-2 transition-colors">
          <MonitorCog /> <span>Settings</span>
        </a>
      </nav>
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-500">
        &copy; 2025 MyApp
      </div>
    </aside>
  );
}

export default function Home() {
  const { startNextStep } = useNextStep();

  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <Sidebar />
      <div className="max-w-4xl mx-auto ml-72">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Let's take a quick tour to get you started!
          </p>
        </div>

        {/* Tour Start Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => startNextStep('welcome-tour')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
          >
            🚀 Start Tour
          </button>
        </div>

        {/* Dashboard Card - First Tour Step */}
        <div 
          id="dashboard-card" 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            📊 Your Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Total Users</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,234</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">Revenue</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">$12,345</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Orders</h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">567</p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Second Tour Step */}
        <div 
          id="action-buttons" 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            ⚡ Quick Actions
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
              ✅ Create New
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
              📝 Edit Existing
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
              📊 View Reports
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
              ⚙️ Settings
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
          <p>Need help? You can restart the tour anytime!</p>
        </div>
      </div>
    </div>
  );
}
