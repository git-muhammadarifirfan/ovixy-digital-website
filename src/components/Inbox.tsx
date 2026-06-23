import React, { useState } from 'react';
import {
  Search,
  Menu,
  Inbox as InboxIcon,
  Star,
  Send,
  File,
  AlertCircle,
  Trash2,
  Settings,
  HelpCircle,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Archive,
  ArrowLeft
} from 'lucide-react';

// Mock Data
const MOCK_EMAILS = [
  {
    id: 1,
    sender: 'Brevo Team',
    email: 'contact@brevo.com',
    subject: 'Welcome to Brevo Inbound Parsing',
    snippet: 'Hi there, your inbound parsing webhook has been successfully configured...',
    date: '10:30 AM',
    read: false,
    body: '<p>Hi there,</p><p>Your inbound parsing webhook has been successfully configured for your domain. You will now receive webhook payloads whenever an email is sent to your domain.</p><p>Best,<br>Brevo Team</p>'
  },
  {
    id: 2,
    sender: 'John Doe',
    email: 'john.doe@example.com',
    subject: 'Project Collaboration Inquiry',
    snippet: 'Hello, I saw your portfolio and would like to discuss a potential project...',
    date: 'Yesterday',
    read: true,
    body: '<p>Hello,</p><p>I saw your portfolio and would like to discuss a potential project regarding a new web application for our local business. Let me know when you are available for a quick chat.</p><p>Regards,<br>John</p>'
  },
  {
    id: 3,
    sender: 'Vercel',
    email: 'no-reply@vercel.com',
    subject: 'Deployment successful',
    snippet: 'Your deployment for Ovixy Digital is now ready and live...',
    date: 'Mar 15',
    read: true,
    body: '<p>Your deployment is ready!</p><p>View your latest changes live on your domain.</p>'
  }
];

export default function Inbox() {
  const [activeFolder, setActiveFolder] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState<typeof MOCK_EMAILS[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const folders = [
    { id: 'inbox', label: 'Inbox', icon: InboxIcon, count: 2 },
    { id: 'starred', label: 'Starred', icon: Star },
    { id: 'sent', label: 'Sent', icon: Send },
    { id: 'drafts', label: 'Drafts', icon: File },
    { id: 'spam', label: 'Spam', icon: AlertCircle },
    { id: 'trash', label: 'Trash', icon: Trash2 },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#F6F8FC] font-sans overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-4">
          <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            {/* Simple Gmail-like Logo */}
            <div className="w-8 h-8 flex items-center justify-center bg-red-500 text-white font-bold rounded-md shadow-sm">
              M
            </div>
            <span className="text-xl text-gray-600 font-medium tracking-tight">Domain Mail</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl px-4">
          <div className="flex items-center bg-[#EAF1FB] rounded-full px-4 py-2 focus-within:bg-white focus-within:shadow-md transition-all border border-transparent focus-within:border-gray-200">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search mail"
              className="w-full bg-transparent border-none focus:outline-none px-4 text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold ml-2 cursor-pointer shadow-sm">
            OD
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#F6F8FC] flex flex-col py-3 shrink-0">
          <div className="px-4 pb-4">
            <button className="bg-[#C2E7FF] text-[#001D35] hover:bg-[#B3DDF4] hover:shadow-md transition-all font-medium py-4 px-6 rounded-2xl flex items-center gap-3">
              <span className="text-2xl leading-none mb-0.5">+</span> Compose
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto pr-2">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => {
                  setActiveFolder(folder.id);
                  setSelectedEmail(null);
                }}
                className={`w-full flex items-center justify-between px-6 py-2 rounded-r-full mb-0.5 text-sm transition-colors ${
                  activeFolder === folder.id
                    ? 'bg-[#D3E3FD] text-[#041E49] font-semibold'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <folder.icon className={`w-4 h-4 ${activeFolder === folder.id ? 'fill-current' : ''}`} />
                  {folder.label}
                </div>
                {folder.count && (
                  <span className="text-xs">{folder.count}</span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Email Area */}
        <main className="flex-1 bg-white rounded-t-2xl mr-2 mt-2 shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2 text-gray-600">
              {selectedEmail ? (
                <>
                  <button 
                    onClick={() => setSelectedEmail(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Archive className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <AlertCircle className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
              <span>1-3 of 3</span>
              <div className="flex gap-1">
                <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* List or Detail View */}
          <div className="flex-1 overflow-y-auto">
            {selectedEmail ? (
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl text-gray-800 font-normal">{selectedEmail.subject}</h2>
                  <span className="text-xs text-gray-500 font-medium px-2 py-1 bg-gray-100 rounded">
                    {activeFolder.toUpperCase()}
                  </span>
                </div>
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                      {selectedEmail.sender.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-gray-800">{selectedEmail.sender}</span>
                        <span className="text-xs text-gray-500">&lt;{selectedEmail.email}&gt;</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">to me</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{selectedEmail.date}</span>
                    <div className="flex gap-1">
                      <button className="p-1.5 hover:bg-gray-100 rounded-full"><Star className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-full"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>

                <div className="text-gray-800 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedEmail.body }} />
                
                <div className="mt-12 flex gap-2">
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors">
                    Reply
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors">
                    Forward
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                {MOCK_EMAILS.map((email) => (
                  <div
                    key={email.id}
                    onClick={() => setSelectedEmail(email)}
                    className={`flex items-center px-4 py-2.5 border-b border-gray-100 cursor-pointer group transition-colors ${
                      email.read ? 'bg-white text-gray-600' : 'bg-white text-gray-900 font-bold'
                    } hover:shadow-[inset_1px_0_0_#dadce0,inset_-1px_0_0_#dadce0,0_1px_2px_0_rgba(60,64,67,.3),0_1px_3px_1px_rgba(60,64,67,.15)] hover:z-10 relative`}
                  >
                    <div className="flex items-center gap-3 w-64 shrink-0">
                      <button className="text-gray-300 hover:text-gray-600"><Star className="w-4 h-4" /></button>
                      <span className="truncate">{email.sender}</span>
                    </div>
                    <div className="flex-1 truncate mr-4">
                      <span className={email.read ? 'font-medium' : 'font-bold'}>{email.subject}</span>
                      <span className="text-gray-500 font-normal mx-2">-</span>
                      <span className="text-gray-500 font-normal">{email.snippet}</span>
                    </div>
                    <div className="text-xs text-gray-600 font-medium shrink-0 group-hover:opacity-0 transition-opacity">
                      {email.date}
                    </div>
                    {/* Hover Actions */}
                    <div className="absolute right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white pl-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded-full"><Archive className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-full"><Trash2 className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-full"><Mail className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

// Dummy icon for Mail because Mail is not imported
function Mail(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
