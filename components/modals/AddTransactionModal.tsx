// components/modals/AddTransactionModal.tsx
"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddTransactionModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar Transacción</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label>Ticker</Label>
            <Input placeholder="Buscar ticker..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Cantidad Comprada</Label>
              <Input type="number" />
            </div>
            <div>
              <Label>Precio Comprado</Label>
              <Input type="number" />
            </div>
            <div>
              <Label>Fecha</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>Precio Total (con comisiones)</Label>
              <Input type="number" />
            </div>
            <div className="col-span-2">
              <Label>Precio del Dólar (opcional)</Label>
              <Input type="number" />
            </div>
          </div>
        </div>
        <DialogFooter className="pt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button>Agregar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
