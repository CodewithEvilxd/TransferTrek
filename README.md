# TransferTrek 🚀

**TransferTrek** is a modern, secure, and user-friendly file-sharing platform that enables seamless file transfers between devices without the need for signups or complex setups. Built with cutting-edge technologies, it offers real-time collaboration, automatic room expiration, and a delightful user experience.

![TransferTrek Preview](./public/image.png)

## ✨ Features

### 🔐 **Secure & Private**
- **No Signups Required**: Start sharing files instantly without creating accounts
- **End-to-End Security**: Files are securely stored and transferred
- **Automatic Cleanup**: Rooms and files are automatically deleted after 15 minutes
- **Unique Room Codes**: 6-digit randomly generated codes for room access

### 📁 **File Management**
- **Drag & Drop Upload**: Intuitive file uploading interface
- **Multiple File Support**: Upload multiple files simultaneously
- **Bulk Operations**: Select, download, or delete multiple files at once
- **Real-time Updates**: Live synchronization across all connected devices
- **File Compression**: Download multiple files as a ZIP archive

### 🌐 **Cross-Platform**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **Fast Performance**: Optimized for speed and reliability

### 🎮 **Fun Elements**
- **Oneko Cat**: Interactive cat companion that follows your cursor
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Toast Notifications**: Real-time feedback for all actions

## 🏗️ Architecture

### **Frontend**
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Custom-built responsive components
- **State Management**: React hooks and server actions

### **Backend**
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: Supabase for live updates
- **File Storage**: UploadThing for secure file handling
- **API**: Server Actions for seamless data operations

### **Infrastructure**
- **Deployment**: Vercel for global CDN and performance
- **Database Hosting**: Supabase for managed PostgreSQL
- **File Storage**: UploadThing for scalable file management

## 📊 Database Schema

```sql
-- Rooms table for managing sharing sessions
model Room {
  id        Int      @id @default(autoincrement())
  roomId    Int      @unique  -- 6-digit room code
  files     File[]
  createdAt DateTime @default(now())
}

-- Files table for storing uploaded files
model File {
  id              Int      @id @default(autoincrement())
  mediaId         String   -- UploadThing file key
  roomId          Int      -- Associated room
  name            String   -- Original filename
  size            Int      -- File size in bytes
  mediaAccessLink String   -- Public access URL
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  Room            Room     @relation(fields: [roomId], references: [roomId])
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm package manager
- PostgreSQL database (Supabase recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodewithEvilxd/TransferTrek.git
   cd TransferTrek
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@host:port/database"
   DIRECT_URL="postgresql://username:password@host:port/database"

   # Supabase (for real-time features)
   NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"

   # UploadThing (for file storage)
   UPLOADTHING_APP_ID="your_uploadthing_app_id"
   UPLOADTHING_SECRET="your_uploadthing_secret"
   ```

4. **Database Migration**
   ```bash
   # Generate Prisma client
   pnpm dlx prisma generate

   # Run migrations
   pnpm dlx prisma migrate dev --name init
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```

6. **Open in Browser**
   Navigate to `http://localhost:3000`

## 📖 Usage Guide

### Creating a Room
1. Visit the homepage
2. Click "Create Room"
3. A unique 6-digit room code will be generated
4. Share the code with others or use the provided URL

### Joining a Room
1. Click "Join Room" on the homepage
2. Enter the 6-digit room code
3. You'll be redirected to the room page

### File Operations
- **Upload**: Drag and drop files or click to browse
- **Download**: Click individual files or select multiple for ZIP download
- **Delete**: Select files and use bulk delete option
- **Share**: Copy room URL to share with others

### Room Management
- Rooms automatically expire after 15 minutes
- Manual room closure available via "Close Room" button
- All files are permanently deleted when room expires

## 🛠️ Tech Stack Details

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 14.2.3 |
| **TypeScript** | Type Safety | 5.0+ |
| **Tailwind CSS** | Styling | 3.4.1 |
| **Prisma** | ORM | 5.14.0 |
| **Supabase** | Real-time Database | 2.43.4 |
| **UploadThing** | File Storage | 6.10.4 |
| **React Hot Toast** | Notifications | 2.4.1 |
| **Lucide React** | Icons | 0.379.0 |
| **JSZip** | File Compression | 3.10.1 |
| **Zod** | Validation | 3.23.8 |

## 🎨 UI/UX Features

- **Dark/Light Mode Ready**: CSS variables for easy theming
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Mobile-First**: Responsive design that works on all devices
- **Loading States**: Skeleton screens and progress indicators
- **Error Handling**: Graceful error messages and retry mechanisms

## 🔧 Development

### Available Scripts
```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Database
pnpm dlx prisma studio    # Open Prisma Studio
pnpm dlx prisma migrate dev  # Create and run migrations
pnpm dlx prisma generate     # Generate Prisma client
```

### Project Structure
```
transfertrek/
├── app/                    # Next.js app directory
│   ├── _actions/          # Server actions
│   ├── _components/       # Reusable components
│   ├── [room_id]/         # Dynamic room pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── config/                # Configuration files
├── prisma/                # Database schema and migrations
├── public/                # Static assets
├── utils/                 # Utility functions
└── package.json           # Dependencies and scripts
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Oneko Cat**: Inspired by the classic desktop companion
- **UploadThing**: For reliable file storage solutions
- **Supabase**: For real-time database capabilities
- **Tailwind CSS**: For the amazing utility-first CSS framework

## 📞 Support

If you have any questions or need help:

- **GitHub Issues**: Report bugs or request features
- **Discord**: Join our community at [discord.nishant.dev](https://discord.nishant.dev)
- **Email**: Contact the maintainer

---

**Built with ❤️ by [CodewithEvilxd](https://github.com/CodewithEvilxd)**

*Star this repo if you find it useful! ⭐*
