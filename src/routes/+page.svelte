<script>
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	import logo from '../lib/imgs/logo/logo.svg';
	import instaIcon from '../lib/imgs/icons/insta3D.webp';
	import tiktokIcon from '../lib/imgs/icons/tiktok.png';
	import telegramIcon from '../lib/imgs/icons/telegram.png';
	import youtubeIcon from '../lib/imgs/icons/youtube3D.webp';

	import robomate from '../lib/imgs/RoboMate.png';

	import artur from '../lib/imgs/team/artur.png';
	import sia from '../lib/imgs/team/sia.png';
	import mark from '../lib/imgs/team/mark.png';

	// Social media icons (using Heroicons)
	const socialIcons = [
		{
			path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
			name: 'instagram',
			imagePath: instaIcon
		},
		{
			path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-.75-.4-1.46-.88-2.06-.23-.28-.48-.56-.76-.8-.01-.01-.02-.03-.03-.04v-8.08z',
			name: 'tiktok',
			imagePath: tiktokIcon
		},
		{
			path: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z',
			name: 'youtube',
			imagePath: youtubeIcon,
			socialLink: 'https://youtube.com/@reel_mate?si=HAUmJf9r3be0ZxtX'
		},
		{
			path: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.598.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z',
			name: 'telegram',
			imagePath: telegramIcon
		}
	];

	let isMenuOpen = false;
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

		@keyframes gradient-flow {
			0% { background-position: 0% 50%; }
			50% { background-position: 100% 50%; }
			100% { background-position: 0% 50%; }
		}
		@keyframes spin {
			0% { transform: rotate(0deg); }
			100% { transform: rotate(360deg); }
		}
		.spin-icon { animation: spin 12s linear infinite; }
	</style>

	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<!-- Navigation -->
<nav class="fixed w-full z-50 bg-white/80 backdrop-blur-sm font-['Inter']">
	<div class="container mx-auto px-6 py-4 flex justify-between items-center">
		<!-- Home link adjusted to use the base path -->
		<a href={base + "/"}>
			<img src={logo} alt="ReelMate" class="logo" />
		</a>

		<!-- Desktop Menu -->
		<div class="hidden md:flex items-center gap-8">
			<a href={base + "/#features"} class="text-gray-600 hover:text-[#621C97] transition-colors">Features</a>
			<a href={base + "/#team"} class="text-gray-600 hover:text-[#621C97] transition-colors">Team</a>
			<button class="bg-[#621C97] text-white px-6 py-2 rounded-full hover:bg-[#4E1877] transition-colors font-['Poppins']">
				Book a Demo
			</button>
		</div>

		<!-- Mobile Burger -->
		<button class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" on:click={() => (isMenuOpen = !isMenuOpen)} aria-label="Toggle menu">
			<svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
			</svg>
		</button>
	</div>

	<!-- Mobile Menu -->
	<div class="md:hidden absolute w-full bg-white/95 backdrop-blur-sm overflow-hidden transition-all duration-300" class:max-h-0={!isMenuOpen} class:max-h-96={isMenuOpen}>
		<div class="container mx-auto px-6 py-4 flex flex-col gap-4">
			<a href={base + "/#features"} class="text-gray-600 hover:text-[#621C97] transition-colors">Features</a>
			<a href={base + "/#team"} class="text-gray-600 hover:text-[#621C97] transition-colors">Team</a>
			<button class="bg-[#621C97] text-white px-6 py-2 rounded-full hover:bg-[#4E1877] transition-colors font-['Poppins'] w-full">
				Book a Demo
			</button>
		</div>
	</div>
</nav>

<!-- Main Section -->
<section class="min-h-screen pt-20 bg-white relative overflow-hidden font-['Inter']">
	<style>
		@keyframes float {
			0%, 100% { transform: translateY(0) translateX(0); }
			50% { transform: translateY(-30px) translateX(15px); }
		}
		.animate-float { animation: float 6s ease-in-out infinite; }
	</style>

	<!-- Gradient Background -->
	<div class="absolute inset-0 opacity-20 bg-gradient-to-r from-[#621C97]/10 via-blue-100/10 to-orange-100/10 animate-gradient-flow" style="background-size: 400% 400%"></div>

	<div class="container mx-auto px-6 h-full">
		<div class="grid lg:grid-cols-2 gap-16 items-center h-full py-24">
			<!-- Image Section -->
			<div class="relative group">
				<div class="relative max-w-[500px] mx-auto animate-float">
					<img src={robomate} alt="RoboMate" class="w-full h-full object-contain drop-shadow-2xl" width="595" height="773" />
					<!-- Animated border effect -->
					<div class="absolute inset-0 rounded-full animate-spin-slow" style="mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"></div>
				</div>

				<!-- Animated Social Icons -->
				<div class="absolute -right-24 -top-12 w-[40vw] h-[40vh] z-20">
					{#each socialIcons.slice(0, 4) as icon, i (icon.name)}
						<div class="spline-animation" style="--i: {i};">
							<a href={icon.socialLink || '#'}>
								<img src={icon.imagePath} alt={icon.name} class="w-20 h-20 object-contain hover:scale-125 cursor-pointer flying-social" />
							</a>
						</div>
					{/each}
				</div>
			</div>

			<!-- Content Section -->
			<div class="space-y-8">
				<h1 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight font-['Poppins']">
					Create
					<span class="bg-gradient-to-r from-[#621C97] to-purple-600 bg-clip-text text-transparent">
						Viral Content
					</span>
					<br />in Minutes
				</h1>

				<p class="text-xl text-gray-600 max-w-xl">
					Transform your social media presence with AI-powered content creation. Schedule, publish, and analyze across all platforms seamlessly.
				</p>

				<div class="space-y-4">
					<div class="flex items-center gap-3">
						<svg class="w-6 h-6 text-[#621C97]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						<span class="text-gray-700">One-click multi-platform publishing</span>
					</div>

					<div class="mt-8 flex gap-4">
						<button class="bg-[#621C97] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#4E1877] transition-colors font-['Poppins']">
							Start Free Trial
						</button>
						<button class="border border-[#621C97] text-[#621C97] px-8 py-4 rounded-xl hover:bg-[#621C97]/10 transition-colors font-['Poppins']">
							Watch Demo
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="py-20 bg-gradient-to-br from-purple-100 via-purple-50 to-pink-100">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#621C97] to-purple-600">
				AI-Powered Social Media Mastery
			</h2>
			<p class="text-gray-600 max-w-xl mx-auto">
				Everything agencies and creators need for viral success
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			<!-- Feature 1: AI Content Conversion -->
			<div class="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="w-16 h-16 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
					<svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9h14m0 0l-4-4m4 4l-4 4" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2 text-[#621C97]">Instant Text-to-Video AI</h3>
				<p class="text-gray-600">
					Transform Reddit threads, blogs, or tweets into polished short-form videos with automatic captions and stock media matching.
				</p>
			</div>

			<!-- Feature 2: Multi-Platform Publishing -->
			<div class="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="w-16 h-16 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
					<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2 text-[#621C97]">Cross-Platform Automation</h3>
				<p class="text-gray-600">
					Schedule posts across TikTok, Reels, Shorts, and YouTube with one click. Auto-optimize formats for each platform.
				</p>
			</div>

			<!-- Feature 3: Agency Toolkit -->
			<div class="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="w-16 h-16 bg-pink-100 rounded-lg mb-4 flex items-center justify-center">
					<svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2 text-[#621C97]">
					Custom Solutions for Agencies & Brands
				</h3>
				<p class="text-gray-600">
					Customers can choose and customize their topic, integration and other important aspects from video design to scheduling
				</p>
			</div>

			<!-- Feature 4: Collaboration -->
			<div class="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="w-16 h-16 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
					<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2 text-[#621C97]">Post Faster, Grow Faster</h3>
				<p class="text-gray-600">
					One-click scheduling & posting across multiple platforms, no more manual editing—just approve & publish
				</p>
			</div>

			<!-- Feature 5: Analytics -->
			<div class="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="w-16 h-16 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
					<svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2 text-[#621C97]">Performance Intelligence</h3>
				<p class="text-gray-600">
					AI-driven analytics predict viral potential and automatically adjust posting schedules based on engagement patterns.
				</p>
			</div>

			<!-- Feature 6: Brand Tools -->
			<div class="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
				<div class="w-16 h-16 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
					<svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2 text-[#621C97]">Remain in control</h3>
				<p class="text-gray-600">
					easily approved content with the help of Telegram bot
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Team Section -->
<section id="team" class="py-20 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#621C97] to-purple-600">
				Our Team
			</h2>
			<p class="text-gray-600 max-w-xl mx-auto">Meet the experts behind ReelMate</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			<div class="text-center">
				<div class="w-40 h-60 mx-auto mb-4 overflow-hidden">
					<img src={artur} alt="Artur" class="w-full h-full object-cover" />
				</div>
				<h3 class="text-xl font-semibold mb-1 text-[#621C97]">Artur Sogomonyan</h3>
				<p class="text-gray-600">CTO</p>
			</div>
			<div class="text-center">
				<div class="w-40 h-60 mx-auto mb-4">
					<img src={sia} alt="Sia" class="w-full h-full object-cover" />
				</div>
				<h3 class="text-xl font-semibold mb-1 text-[#621C97]">Sia Gorskaya</h3>
				<p class="text-gray-600">CPO</p>
			</div>
			<div class="text-center">
				<div class="w-40 h-60 mx-auto mb-4 overflow-hidden">
					<img src={mark} alt="Mark" class="w-full h-full object-cover" />
				</div>
				<h3 class="text-xl font-semibold mb-1 text-[#621C97]">Mark Drozdov</h3>
				<p class="text-gray-600">CEO</p>
			</div>
		</div>
	</div>
</section>

<!-- Spinning Social Icons Section -->
<section class="min-h-[60vh] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center relative overflow-hidden">
	<!-- Outer Ring -->
	<div class="absolute inset-0 flex items-center justify-center">
		{#each socialIcons.filter((_, i) => i % 2 === 0) as icon, i (icon.name)}
			<div class="absolute w-16 h-16 opacity-20" style="transform: rotate({i * 72}deg) translate(180px) rotate(-{i * 72}deg)">
				<svg class="w-full h-full spin-icon text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d={icon.path} />
				</svg>
			</div>
		{/each}
	</div>

	<!-- Inner Ring -->
	<div class="absolute inset-3 flex items-center justify-center">
		{#each socialIcons as icon, i (icon.name)}
			<div class="absolute w-16 h-16 opacity-20" style="transform: rotate({i * 92}deg) translate(120px) rotate(-{i * 72}deg)">
				<svg class="w-full h-full spin-icon text-gray-600 animation-delay-1000" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d={icon.path} />
				</svg>
			</div>
		{/each}
	</div>

	<!-- Content -->
	<div class="text-center relative z-10 space-y-6 px-4">
		<h2 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
			<span class="block text-transparent bg-clip-text bg-gradient-to-r from-[#621C97] to-purple-600">
				POWERFUL & VERSATILE
			</span>
			<span class="block mt-4 text-3xl md:text-4xl font-semibold text-gray-700">
				Works on all
			</span>
			<span class="block text-4xl md:text-5xl font-bold text-gray-900">
				Social Media
			</span>
			<span class="block text-3xl md:text-4xl font-semibold text-gray-700">
				Platforms
			</span>
		</h2>

		<div class="flex justify-center gap-6 flex-wrap max-w-2xl mx-auto">
			{#each socialIcons as icon (icon.name)}
				<div class="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform hover:z-10 relative">
					<svg class="w-7 h-7 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path d={icon.path} />
					</svg>
				</div>
			{/each}
		</div>
	</div>
</section>

<style global>
	body {
		font-family: 'Poppins', sans-serif;
	}

	h1,
	h2,
	h3,
	h4 {
		font-family: 'Poppins', sans-serif;
	}

	/* Mobile menu transition */
	.max-h-0 {
		max-height: 0;
		opacity: 0;
	}
	.max-h-96 {
		max-height: 24rem;
		opacity: 1;
	}

	.animate-gradient-flow {
		animation: gradient-flow 15s ease infinite;
	}

	.logo {
		height: 2.5rem;
	}

	.container {
		max-width: 80rem; /* equivalent to max-w-7xl */
	}

	.spin-icon {
		animation: spin 16s linear infinite;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.animation-delay-1000 {
		animation-delay: -4s;
	}

	@keyframes floating {
		0%, 100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(5deg);
		}
	}

	@keyframes spin-float {
		0% {
			transform: rotate(0deg) translateY(0);
		}
		25% {
			transform: rotate(5deg) translateY(-10px);
		}
		50% {
			transform: rotate(0deg) translateY(-20px);
		}
		75% {
			transform: rotate(-5deg) translateY(-10px);
		}
		100% {
			transform: rotate(0deg) translateY(0);
		}
	}

	.spline-animation {
		position: absolute;
		filter: drop-shadow(0 4px 6px rgba(98, 28, 151, 0.1));
		transition: all 0.3s ease;
		animation: spline-move 12s ease-in-out infinite;
	}

	.flying-social {
		animation: floating 3s ease infinite;
		transition: 0.3s;
	}

	.spline-animation:hover {
		filter: drop-shadow(0 8px 12px rgba(98, 28, 151, 0.2));
		z-index: 10;
		animation-play-state: paused;
	}

	@keyframes spline-move {
		0% {
			transform: translate(0, 0) rotate(0deg);
		}
		25% {
			transform: translate(4%, -2.5%) rotate(15deg);
		}
		50% {
			transform: translate(2%, 3%) rotate(-10deg);
		}
		75% {
			transform: translate(-3%, -3%) rotate(25deg);
		}
		100% {
			transform: translate(0, 0) rotate(0deg);
		}
	}

	/* Individual icon starting positions */
	.spline-animation:nth-child(1) {
		left: 10%;
		top: 120%;
	}
	.spline-animation:nth-child(2) {
		left: 20%;
		top: 130%;
	}
	.spline-animation:nth-child(3) {
		left: 60%;
		top: 130%;
	}
	.spline-animation:nth-child(4) {
		left: 70%;
		top: 120%;
	}

	@media (max-width: 1024px) {
		.spline-animation:nth-child(1) {
			left: -10%;
			top: 120%;
		}
		.spline-animation:nth-child(2) {
			left: 0%;
			top: 130%;
		}
		.spline-animation:nth-child(3) {
			left: 30%;
			top: 130%;
		}
		.spline-animation:nth-child(4) {
			left: 50%;
			top: 120%;
		}
	}

	@media (max-width: 640px) {
		.spline-animation:nth-child(1) {
			left: -160%;
			top: 90%;
		}
		.spline-animation:nth-child(2) {
			left: -120%;
			top: 90%;
		}
		.spline-animation:nth-child(3) {
			left: -40%;
			top: 90%;
		}
		.spline-animation:nth-child(4) {
			left: -20%;
			top: 90%;
		}
	}
</style>
