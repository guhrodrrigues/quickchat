"use client";

import { useChat } from "ai/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px] animate-enter">
      <CardHeader>
        <CardTitle>QuickChat</CardTitle>
        <CardDescription>
          Utilizando o Vercel SDK para criar um chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-3 text-sm mb-4">
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>GR</AvatarFallback>
                  <AvatarImage src="https://github.com/guhrodriguess.png" />
                </Avatar>
              )}

              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="https://github.com/openai.png" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold">
                  {message.role === "user" ? "Usuário" : "IA"}
                </span>
                <span className="text-muted-foreground">{message.content}</span>
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Como posso te ajudar?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
