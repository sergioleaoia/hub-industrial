"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function maskWhatsappBR(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const blockedEmailDomains = new Set([
  "empresas.com.br",
  "empresa.com",
  "teste.com",
  "teste.com.br",
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "hotmail.com.br",
  "outlook.com",
  "outlook.com.br",
  "live.com",
  "live.com.br",
  "msn.com",
  "yahoo.com",
  "yahoo.com.br",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "uol.com.br",
  "bol.com.br",
  "terra.com.br",
  "ig.com.br",
  "globo.com",
  "r7.com",
  "proton.me",
  "protonmail.com",
]);

const leadSchema = z.object({
  nome: z.string().min(2, "Informe seu primeiro nome"),
  email: z
    .string()
    .email("Email inválido")
    .refine(
      (email) => {
        const domain = email.toLowerCase().split("@").at(1);
        return domain ? !blockedEmailDomains.has(domain) : false;
      },
      { message: "Use seu email corporativo." }
    ),
  whatsapp: z
    .string()
    .refine(
      (v) => {
        const digits = v.replace(/\D/g, "");
        return digits.length === 10 || digits.length === 11;
      },
      { message: "WhatsApp inválido. Use DDD + número." }
    ),
});

type LeadFormData = z.infer<typeof leadSchema>;

export function LeadForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: { nome: "", email: "", whatsapp: "" },
  });

  async function onSubmit(data: LeadFormData) {
    setServerError(null);

    const utms = {
      utm_source: searchParams.get("utm_source") ?? null,
      utm_medium: searchParams.get("utm_medium") ?? null,
      utm_campaign: searchParams.get("utm_campaign") ?? null,
      utm_content: searchParams.get("utm_content") ?? null,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...utms }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Erro ao enviar. Tente novamente.");
      }

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer ?? [];
        window.dataLayer.push({
          event: "hub-submit",
          nome: data.nome,
          email: data.email.toLowerCase(),
          phone: data.whatsapp,
          form_name: "hub-ia-industrial",
        });
      }

      router.push("/obrigado-ia-para-industria-leao");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Erro ao enviar.";
      setServerError(msg);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#0a0c10] p-6 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-8 [&_input]:border-white/20 [&_input]:bg-white/[0.06] [&_input]:text-[#fafafa] [&_input]:placeholder:text-white/55 [&_label]:text-[#f5f5f5]"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <h2
          id="acessar-titulo"
          className="font-display text-[1.35rem] font-bold leading-[1.15] tracking-[-0.015em] text-white sm:text-[1.5rem]"
        >
          Acesse o Hub de IA para Indústrias.
        </h2>
        <p className="text-[14px] leading-[1.55] text-[#e5e5e5]">
          Basta preencher o formulário abaixo:
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Field label="Primeiro nome" error={errors.nome?.message}>
          <Input
            {...register("nome")}
            placeholder="Como posso te chamar?"
            autoComplete="given-name"
          />
        </Field>

        <Field label="Email corporativo" error={errors.email?.message}>
          <Input
            type="email"
            {...register("email")}
            placeholder="voce@suaindustria.com.br"
            autoComplete="email"
          />
        </Field>

        <Field label="WhatsApp" error={errors.whatsapp?.message}>
          <Controller
            name="whatsapp"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="tel"
                inputMode="numeric"
                placeholder="(11) 99999-9999"
                autoComplete="tel"
                maxLength={16}
                value={field.value ?? ""}
                onChange={(e) => field.onChange(maskWhatsappBR(e.target.value))}
              />
            )}
          />
        </Field>

        <p className="text-xs text-[#d4d4d4]">
          Não enviaremos spam, também não gostamos rs.
        </p>
      </div>

      {serverError && (
        <p
          role="alert"
          className="rounded-lg border border-danger/30 bg-danger/10 px-4 py-2.5 text-sm text-danger"
        >
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        variant="cta"
        size="lg"
        fullWidth
        disabled={isSubmitting}
        className="font-bold uppercase tracking-[0.14em]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            Acessar o Hub agora
            <ArrowRight className="h-4 w-4" aria-hidden />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-[#c4c4c4]">
        Ao enviar, você concorda em receber contato da Leão Marketeria. Seus
        dados são tratados conforme a LGPD.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Label>{label}</Label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
