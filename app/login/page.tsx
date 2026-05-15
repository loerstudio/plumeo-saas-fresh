import { SignIn } from '@clerk/nextjs'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      {/* Subtle gradient background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,40,200,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(40,90,235,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        <SignIn
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl",
              headerTitle: "text-white text-2xl font-semibold",
              headerSubtitle: "text-gray-400",
              socialButtonsBlockButton: "bg-white/10 border-white/10 text-white hover:bg-white/20",
              socialButtonsBlockButtonText: "text-white font-medium",
              dividerLine: "bg-white/10",
              dividerText: "text-gray-400",
              formFieldLabel: "text-gray-300",
              formFieldInput: "bg-white/5 border-white/10 text-white placeholder:text-gray-500",
              formButtonPrimary: "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white",
              footerActionLink: "text-violet-400 hover:text-violet-300",
              identityPreviewText: "text-white",
              identityPreviewEditButton: "text-violet-400 hover:text-violet-300",
              formFieldInputShowPasswordButton: "text-gray-400 hover:text-white",
              otpCodeFieldInput: "bg-white/5 border-white/10 text-white",
              formResendCodeLink: "text-violet-400 hover:text-violet-300",
            },
            layout: {
              socialButtonsPlacement: "bottom",
              showOptionalFields: false,
            },
            variables: {
              colorPrimary: "#8b5cf6",
              colorBackground: "transparent",
              colorText: "#ffffff",
              colorTextSecondary: "#9ca3af",
              colorDanger: "#ef4444",
              borderRadius: "0.75rem",
              fontFamily: "Inter, system-ui, sans-serif",
            }
          }}
          routing="path"
          path="/login"
          signUpUrl="/register"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  )
}