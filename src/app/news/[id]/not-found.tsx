import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="center-screen">
      <div className="inner">
        <p className="error-code">404</p>
        <h1 className="error-title">Yangilik topilmadi</h1>
        <p className="error-text">Bu yangilik o'chirilgan yoki manzil noto'g'ri.</p>
        <Link href="/" className="btn-primary">
          <ArrowLeft size={16} /> Bosh sahifa
        </Link>
      </div>
    </div>
  );
}
