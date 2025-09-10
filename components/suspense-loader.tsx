import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SuspenseLoader() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header Skeleton */}
      <header className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="mx-auto rounded-2xl flex items-center justify-center mb-6">
              <Skeleton className="h-[256px] w-[256px] rounded-2xl" />
            </div>
          </div>
          <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
            <Skeleton className="h-5 w-2/3 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info Skeletons */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-[100px]" />
                      <Skeleton className="h-4 w-[150px]" />
                    </div>
                  </div>
                  <Skeleton className="h-6 w-[200px]" />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-[100px]" />
                      <Skeleton className="h-4 w-[150px]" />
                    </div>
                  </div>
                  <Skeleton className="h-6 w-[200px]" />
                </CardContent>
              </Card>
            </div>

            {/* Form Skeleton */}
            <Card>
              <CardContent className="p-8">
                <Skeleton className="h-8 w-1/2 mb-6" />
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-1/4" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-1/4" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                  <Skeleton className="h-12 w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer Skeleton */}
      <footer className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 space-y-2">
            <Skeleton className="h-6 w-1/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
          </div>
          <div className="border-t border-accent/20 pt-6">
            <Skeleton className="h-4 w-1/3 mx-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
}
