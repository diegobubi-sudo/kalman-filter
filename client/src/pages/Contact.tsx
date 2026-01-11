import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { Section } from "@/components/Section";

export default function Contact() {
  const submitContact = useSubmitContact();
  
  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  function onSubmit(data: InsertContactRequest) {
    submitContact.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <div className="pt-24 min-h-screen flex flex-col justify-center">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Let's start a <br />
              <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you're a researcher, clinician, or developer, we'd love to hear 
              how we can help you get more from your data.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-semibold mb-2">Headquarters</h3>
                <p className="text-muted-foreground">
                  1200 Biotechnology Lane<br />
                  Cambridge, MA 02142
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">hello@biosignallabs.com</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 rounded-3xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Dr. Jane Doe" 
                          {...field} 
                          className="bg-background/50 border-white/10 focus:border-primary text-white h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="jane@institute.org" 
                            {...field} 
                            className="bg-background/50 border-white/10 focus:border-primary text-white h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Organization</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="University / Clinic" 
                            {...field}
                            value={field.value || ""} 
                            className="bg-background/50 border-white/10 focus:border-primary text-white h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          {...field} 
                          className="bg-background/50 border-white/10 focus:border-primary text-white min-h-[150px] resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={submitContact.isPending}
                  className="w-full h-12 bg-primary text-background font-bold hover:bg-cyan-400 transition-colors"
                >
                  {submitContact.isPending ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Send Request</>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
}
