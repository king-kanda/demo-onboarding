const steps = [
  {
    tour: 'welcome-tour',
    steps: [
      {
        icon: <>👋</>,
        title: 'Welcome to the App!',
        content: (
          <>
            <p>👋 Welcome! This is your main dashboard where you can see all your important information at a glance.</p>
            <p className="mt-2 text-sm text-gray-600">Let's explore the key features together!</p>
          </>
        ),
        selector: '#dashboard-card',
        side: 'left',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>⚡</>,
        title: 'Take Action Here',
        content: (
          <>
            <p>⚡ These quick action buttons let you perform the most common tasks in a flash.</p>
            <p className="mt-2 text-sm text-gray-600">Click any button to get started with your work!</p>
          </>
        ),
        selector: '#action-buttons',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>📄</>,
        title: 'View and Upload Documents',
        content: (
          <>
            <p>📄 Here you can view and upload important documents related to your projects.</p>
            <p className="mt-2 text-sm text-gray-600">Keep all your files organized and accessible.</p>
          </>
        ),
        selector: '#product-documents',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🤖</>,
        title: 'Virtual Agent Assistance',
        content: (
          <>
            <p>🤖 Need help? Our virtual agent is here to assist you with smart suggestions and support.</p>
            <p className="mt-2 text-sm text-gray-600">Ask anything and get instant answers!</p>
          </>
        ),
        selector: '#virtual-agent',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>⚙️</>,
        title: 'Settings and Preferences',
        content: (
          <>
            <p>⚙️ Here you can customize your app settings and preferences to suit your workflow.</p>
            <p className="mt-2 text-sm text-gray-600">Personalize your experience for maximum productivity.</p>
          </>
        ),
        selector: '#settings',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
    ],
  },
];

export default steps;