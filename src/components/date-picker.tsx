"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import "react-day-picker/dist/style.css";

export type DatePickerProps = {
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
  className?: string;
};

export function DatePicker({ selected, onSelect, className }: DatePickerProps) {
  return (
    <div className={cn("p-3 bg-white rounded-lg border shadow-sm", className)}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        locale={ptBR}
        disabled={{ before: new Date() }}
        showOutsideDays
        className="m-0"
        classNames={{
          day_selected: "bg-safari-green text-white hover:bg-safari-green/90",
          day_today: "font-bold text-safari-orange",
        }}
      />
    </div>
  );
}
