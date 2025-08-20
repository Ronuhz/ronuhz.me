import Link from "next/link";
import "@/app/(main)/globals.css";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<section className="brutal-section max-w-lg">
				<h1 className="text-2xl md:text-3xl font-bold uppercase whitespace-nowrap">Page Not Found</h1>
				<p className="opacity-80 mt-2">The page you&apos;re looking for doesn&apos;t exist.</p>
				<div className="mt-4">
					<Link href="/" className="brutal-button">Back to Home</Link>
				</div>
			</section>
		</div>
	);
}
