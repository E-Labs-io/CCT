/** @format */
"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <section>
      <div className="home-container">
        <div className="home-title"> PTTRN LIGHTING TOOLS</div>
        <div className="home-button-container">
          <div className="home-button-line">
            <Button variant="bordered" onClick={() => router.push("cct")}>
              CCT Calculator
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
