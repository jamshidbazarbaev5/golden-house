"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      <div className="breadcrumb__inner">
        <Link href="/" className="breadcrumb__item">
          <Home className="breadcrumb__icon" />
          <span>Бош саҳифа</span>
        </Link>
        {items.map((item, index) => (
          <div key={index} className="breadcrumb__item-wrapper">
            <ChevronRight className="breadcrumb__separator" />
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="breadcrumb__item">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb__item breadcrumb__item--active">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
