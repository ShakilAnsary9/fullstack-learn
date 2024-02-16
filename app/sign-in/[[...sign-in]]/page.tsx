import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center mt-16">
      <SignIn
        appearance={{
          elements: {
            card: "dark:bg-slate-600",
            formButtonPrimary: "bg-current hover:bg-dark",
            footerActionLink: "text-current hover:text-dark",
            formFieldInput: "dark:bg-dark",
            headerTitle: "dark:text-current",
            headerSubtitle: "dark:text-slate-300",
            socialButtonsBlockButtonText: "dark:text-slate-100",
            dividerText: "dark:text-slate-300",
            formFieldLabel: "dark:text-slate-50",
            footerActionText: "dark:text-slate-300",
            socialButtonsBlockButton: "dark:border-dark",
            socialButtonsBlockButtonArrow: "dark:text-current",
            dividerLine: "dark:bg-dark",
          },
        }}
      />
    </div>
  );
}
