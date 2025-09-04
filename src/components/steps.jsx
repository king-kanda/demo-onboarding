const steps = [
  {
    tour: 'welcome-tour',
    steps: [
      {
        icon: <>👋</>,
        title: 'Welcome to the App!',
        content: (
          <>
            <p>This is the main dashboard where you can see all your important information.</p>
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
        icon: <>🎯</>,
        title: 'Take Action Here',
        content: (
          <>
            <p>These action buttons let you perform the most common tasks.</p>
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
        icon: <>🎯</>,
        title: 'View and Upload Documents',
        content: (
          <>
            <p>Here you can view and upload important documents related to your projects.</p>
            <p className="mt-2 text-sm text-gray-600">Click any button to get started with your work!</p>
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
        icon: <>🎯</>,
        title: 'Virtual Agent Assistance',
        content: (
          <>
            <p>These action buttons let you perform the most common tasks.</p>
            <p className="mt-2 text-sm text-gray-600">Click any button to get started with your work!</p>
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
        icon: <></>,
        title: 'Settings and Preferences',
        content: (
          <>
            <p>Here you can customize your app settings and preferences.</p>
            <p className="mt-2 text-sm text-gray-600">Click any button to get started with your work!</p>
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