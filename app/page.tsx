// @ts-nocheck
"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Gift,
  Store,
  Trophy,
  Wallet,
  MessageSquare,
  Radar,
  ShieldCheck,
  Users,
  Search,
  Bell,
  Star,
  CreditCard,
  Crown,
  Navigation,
  Sparkles,
  PlusCircle,
  BarChart3,
  Settings,
  CheckCircle2,
  Lock,
  User,
  LogOut,
  Eye,
  Smartphone,
  Target,
  Map,
  Building2,
  Send,
  Trash2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const initialStores = [
  {
    id: 1,
    name: "Queen City Sneakers",
    category: "Fashion",
    distance: 0.4,
    prize: "$25 Gift Card",
    avatar: "Blue Falcon",
    visits: 128,
    conversion: 18,
    activeHunt: true,
    approved: true,
    message: "Find the Blue Falcon near the new release wall.",
    lat: 35.2621,
    lng: -81.1873,
  },
  {
    id: 2,
    name: "Gaston Tech Outlet",
    category: "Electronics",
    distance: 1.2,
    prize: "Free Headphones",
    avatar: "Circuit Fox",
    visits: 94,
    conversion: 14,
    activeHunt: true,
    approved: true,
    message: "Hidden prize points are near gaming accessories today.",
    lat: 35.2552,
    lng: -81.1801,
  },
  {
    id: 3,
    name: "Main Street Coffee",
    category: "Food & Drink",
    distance: 0.8,
    prize: "$10 Cash Credit",
    avatar: "Mocha Bear",
    visits: 231,
    conversion: 26,
    activeHunt: false,
    approved: true,
    message: "Stop in before noon for a bonus reward chance.",
    lat: 35.2456,
    lng: -81.1847,
  },
  {
    id: 4,
    name: "Belmont Outdoor Supply",
    category: "Outdoors",
    distance: 2.1,
    prize: "$100 Shopping Credit",
    avatar: "Trail Dragon",
    visits: 71,
    conversion: 11,
    activeHunt: true,
    approved: false,
    message: "A high-value prize marker is active near camping gear.",
    lat: 35.2426,
    lng: -81.0373,
  },
];

const starterPrizes = [
  { id: 1, label: "$10 Cash Credit", status: "Claimed", source: "Main Street Coffee", value: 10 },
  { id: 2, label: "$25 Gift Card", status: "Available", source: "Queen City Sneakers", value: 25 },
  { id: 3, label: "Free Headphones", status: "Locked", source: "Gaston Tech Outlet", value: 40 },
];

const avatars = ["Blue Falcon", "Circuit Fox", "Mocha Bear", "Trail Dragon", "Silver Panther", "Neon Wolf"];
const categories = ["All", "Fashion", "Electronics", "Food & Drink", "Outdoors"];

function Badge({ children }) {
  return <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-200">{children}</span>;
}

function StatCard({ icon: Icon, label, value, sub }) {
  return (
    <Card className="rounded-2xl border-slate-800 bg-slate-950/80 shadow-lg">
      <CardContent className="p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-1 text-2xl font-bold text-white">{value}</p>
            <p className="mt-1 text-xs text-slate-500">{sub}</p>
          </div>
          <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300">
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function LoginScreen({ setUser }) {
  const demoUsers = [
    { role: "user", name: "Demo User", label: "Enter as shopper", icon: User },
    { role: "store", name: "Demo Store Owner", label: "Enter as store", icon: Store },
    { role: "admin", name: "Free$t. Admin", label: "Enter as admin", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-5 text-white md:p-10">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <Card className="rounded-3xl border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <Badge>Functional Beta</Badge>
            <h1 className="mt-6 text-6xl font-black tracking-tight">Free$t.</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">A working investor-demo beta for treasure hunts, store foot-traffic campaigns, prize wallets, avatars, proximity messaging and admin controls.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><Map className="h-7 w-7 text-blue-300" /><p className="mt-3 font-bold">Nearby Hunts</p></div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><Gift className="h-7 w-7 text-blue-300" /><p className="mt-3 font-bold">Prize Wallet</p></div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><Building2 className="h-7 w-7 text-blue-300" /><p className="mt-3 font-bold">Store Tools</p></div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-800 bg-slate-950 shadow-2xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold">Choose Demo Access</h2>
            <p className="mt-2 text-sm text-slate-400">This beta uses simulated data and simulated wallet balances for safe investor and store demos.</p>
            <div className="mt-6 space-y-3">
              {demoUsers.map(({ role, name, label, icon: Icon }) => (
                <Button key={role} onClick={() => setUser({ role, name })} className="w-full justify-start rounded-2xl bg-slate-900 p-6 text-left hover:bg-blue-600">
                  <Icon className="mr-3 h-5 w-5" />
                  <span><span className="block font-bold">{label}</span><span className="text-xs text-slate-300">{name}</span></span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function UserApp({ stores, prizes, setPrizes, activeStore, setActiveStore }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [radius, setRadius] = useState(5);
  const [foundPrize, setFoundPrize] = useState(null);

  const filteredStores = stores.filter((store) => {
    const matchesQuery = `${store.name} ${store.category} ${store.prize} ${store.avatar}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || store.category === category;
    const matchesRadius = store.distance <= radius;
    return matchesQuery && matchesCategory && matchesRadius && store.approved;
  });

  function startHunt() {
    const prize = {
      id: Date.now(),
      label: activeStore.prize,
      status: "Available",
      source: activeStore.name,
      value: Number(String(activeStore.prize).replace(/[^0-9]/g, "")) || 10,
    };
    setFoundPrize(prize);
    setPrizes((prev) => [prize, ...prev]);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
      <Card className="overflow-hidden rounded-2xl border-slate-800 bg-slate-950 shadow-xl">
        <CardContent className="p-0">
          <div className="border-b border-slate-800 p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-blue-300">Free$t. User App</p>
                <h2 className="text-2xl font-bold text-white">Nearby Treasure Hunts</h2>
              </div>
              <Button className="rounded-xl bg-blue-600 hover:bg-blue-500"><Navigation className="mr-2 h-4 w-4" /> Simulate GPS Scan</Button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto_auto]">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-300">
                <Search className="h-4 w-4 text-slate-500" />
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search stores, prizes, avatars, or categories" className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500" />
              </div>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-200 outline-none">
                {categories.map((cat) => <option key={cat}>{cat}</option>)}
              </select>
              <select value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-200 outline-none">
                {[1, 2, 5, 10].map((m) => <option key={m} value={m}>{m} miles</option>)}
              </select>
            </div>
          </div>
          <div className="relative min-h-[420px] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-5">
            <div className="absolute inset-5 rounded-2xl border border-blue-500/20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.18),transparent_35%)]" />
            <div className="relative grid h-full min-h-[370px] grid-cols-1 gap-4 md:grid-cols-2">
              {filteredStores.map((store, index) => (
                <motion.button
                  key={store.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveStore(store)}
                  className={`rounded-2xl border p-4 text-left shadow-lg transition ${activeStore.id === store.id ? "border-blue-400 bg-blue-950/70" : "border-slate-800 bg-slate-950/80 hover:border-blue-700"}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">{store.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{store.category} • {store.distance.toFixed(1)} mi</p>
                    </div>
                    <MapPin className="h-5 w-5 text-blue-300" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>{store.prize}</Badge>
                    <Badge>{store.avatar}</Badge>
                    <Badge>{store.activeHunt ? "Live Hunt" : "Bonus"}</Badge>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-slate-800 bg-slate-950 shadow-xl">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Active Hunt</p>
              <h3 className="text-2xl font-bold text-white">{activeStore.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{activeStore.category} • {activeStore.distance.toFixed(1)} mi</p>
            </div>
            <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300"><Gift className="h-7 w-7" /></div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-400">Today’s Prize</p>
            <p className="mt-1 text-3xl font-bold text-white">{activeStore.prize}</p>
            <p className="mt-3 text-sm text-slate-300">{activeStore.message}</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <Trophy className="h-5 w-5 text-blue-300" />
              <p className="mt-2 text-sm text-slate-400">Avatar</p>
              <p className="font-semibold text-white">{activeStore.avatar}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <Radar className="h-5 w-5 text-blue-300" />
              <p className="mt-2 text-sm text-slate-400">Hunt Status</p>
              <p className="font-semibold text-white">{activeStore.activeHunt ? "Live Now" : "Bonus Only"}</p>
            </div>
          </div>

          <Button onClick={startHunt} className="mt-6 w-full rounded-xl bg-blue-600 py-6 text-base hover:bg-blue-500"><Sparkles className="mr-2 h-5 w-5" /> Start Hunt / Discover Prize</Button>
          {foundPrize && <div className="mt-4 rounded-2xl border border-blue-500/30 bg-blue-950/50 p-4 text-sm text-blue-100">Prize discovered: <strong>{foundPrize.label}</strong> at {foundPrize.source}. It has been added to the wallet.</div>}
        </CardContent>
      </Card>
    </div>
  );
}

function WalletScreen({ prizes, setPrizes }) {
  const availableBalance = prizes.filter((p) => p.status !== "Locked").reduce((sum, p) => sum + (p.value || 0), 0);

  function claimPrize(id) {
    setPrizes((prev) => prev.map((p) => p.id === id ? { ...p, status: "Claimed" } : p));
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
      <Card className="rounded-2xl border-slate-800 bg-gradient-to-br from-blue-950 to-slate-950 shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-200">Free$t. Wallet</p>
              <h2 className="mt-2 text-4xl font-bold text-white">${availableBalance.toFixed(2)}</h2>
              <p className="mt-2 text-sm text-slate-300">Simulated available prize balance</p>
            </div>
            <CreditCard className="h-12 w-12 text-blue-200" />
          </div>
          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">Internal Visa concept</p>
            <p className="mt-2 text-sm text-slate-200">This beta keeps all card and cash movement simulated until payment, banking, tax, sweepstakes and fraud-control systems are legally cleared.</p>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-2xl border-slate-800 bg-slate-950 shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-white">Prizes & Rewards</h2>
          <div className="mt-5 space-y-3">
            {prizes.map((prize) => (
              <div key={prize.id} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300"><Gift className="h-5 w-5" /></div>
                  <div>
                    <p className="font-semibold text-white">{prize.label}</p>
                    <p className="text-sm text-slate-400">{prize.source}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge>{prize.status}</Badge>
                  {prize.status === "Available" && <Button onClick={() => claimPrize(prize.id)} size="sm" className="rounded-xl bg-blue-600 hover:bg-blue-500">Claim</Button>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StoreDashboard({ stores, setStores }) {
  const [selectedId, setSelectedId] = useState(stores[0]?.id || 1);
  const selected = stores.find((s) => s.id === selectedId) || stores[0];
  const [campaign, setCampaign] = useState({ prize: selected?.prize || "", message: selected?.message || "", avatar: selected?.avatar || avatars[0] });

  function saveCampaign() {
    setStores((prev) => prev.map((s) => s.id === selectedId ? { ...s, ...campaign, activeHunt: true } : s));
  }

  function addDemoStore() {
    const id = Date.now();
    setStores((prev) => [{ id, name: "New Demo Store", category: "Fashion", distance: 1.7, prize: "$50 Bonus", avatar: "Silver Panther", visits: 0, conversion: 0, activeHunt: true, approved: false, message: "New store campaign waiting for admin approval.", lat: 35.26, lng: -81.18 }, ...prev]);
    setSelectedId(id);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon={Users} label="Foot Traffic" value={stores.reduce((s, x) => s + x.visits, 0)} sub="Prototype total" />
        <StatCard icon={Gift} label="Live Hunts" value={stores.filter((s) => s.activeHunt).length} sub="Active campaigns" />
        <StatCard icon={MessageSquare} label="Messages Sent" value="1,842" sub="By proximity" />
        <StatCard icon={BarChart3} label="Avg. Conversion" value={`${Math.round(stores.reduce((s, x) => s + x.conversion, 0) / stores.length)}%`} sub="Visit-to-claim rate" />
      </div>
      <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        <Card className="rounded-2xl border-slate-800 bg-slate-950 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Store Profiles</h2>
              <Button onClick={addDemoStore} className="rounded-xl bg-blue-600 hover:bg-blue-500"><PlusCircle className="mr-2 h-4 w-4" /> Add</Button>
            </div>
            <div className="mt-5 space-y-3">
              {stores.map((store) => (
                <button key={store.id} onClick={() => { setSelectedId(store.id); setCampaign({ prize: store.prize, message: store.message, avatar: store.avatar }); }} className={`w-full rounded-2xl border p-4 text-left ${selectedId === store.id ? "border-blue-400 bg-blue-950/50" : "border-slate-800 bg-slate-900"}`}>
                  <div className="flex justify-between gap-3"><span className="font-bold text-white">{store.name}</span><Badge>{store.approved ? "Approved" : "Pending"}</Badge></div>
                  <p className="mt-1 text-sm text-slate-400">{store.category} • {store.prize}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-800 bg-slate-950 shadow-xl">
          <CardContent className="p-6">
            <p className="text-sm text-blue-300">Free$t. $tore$ Dashboard</p>
            <h2 className="text-2xl font-bold text-white">Campaign Builder</h2>
            <div className="mt-5 space-y-4">
              <label className="block"><span className="text-sm text-slate-400">Prize / Reward</span><input value={campaign.prize} onChange={(e) => setCampaign({ ...campaign, prize: e.target.value })} className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none" /></label>
              <label className="block"><span className="text-sm text-slate-400">Avatar</span><select value={campaign.avatar} onChange={(e) => setCampaign({ ...campaign, avatar: e.target.value })} className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none">{avatars.map((a) => <option key={a}>{a}</option>)}</select></label>
              <label className="block"><span className="text-sm text-slate-400">Proximity Message</span><textarea value={campaign.message} onChange={(e) => setCampaign({ ...campaign, message: e.target.value })} className="mt-2 min-h-[120px] w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none" /></label>
              <Button onClick={saveCampaign} className="w-full rounded-xl bg-blue-600 py-6 hover:bg-blue-500"><Send className="mr-2 h-4 w-4" /> Save Campaign</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function AdminScreen({ stores, setStores }) {
  function approveStore(id) {
    setStores((prev) => prev.map((s) => s.id === id ? { ...s, approved: true } : s));
  }
  function deleteStore(id) {
    setStores((prev) => prev.filter((s) => s.id !== id));
  }
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <Card className="rounded-2xl border-slate-800 bg-slate-950 shadow-xl lg:col-span-2">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-white">Admin Control Center</h2>
          <p className="mt-2 text-sm text-slate-400">Beta management layer for stores, prizes, users, campaigns, compliance and prize funding.</p>
          <div className="mt-5 space-y-3">
            {stores.map((store) => (
              <div key={store.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <div>
                  <p className="font-bold text-white">{store.name}</p>
                  <p className="text-sm text-slate-400">{store.category} • {store.prize} • {store.approved ? "Approved" : "Pending Approval"}</p>
                </div>
                <div className="flex gap-2">
                  {!store.approved && <Button onClick={() => approveStore(store.id)} size="sm" className="rounded-xl bg-blue-600 hover:bg-blue-500"><CheckCircle2 className="mr-2 h-4 w-4" /> Approve</Button>}
                  <Button onClick={() => deleteStore(store.id)} size="sm" variant="outline" className="rounded-xl border-slate-700 bg-slate-950 text-slate-100 hover:bg-slate-800"><Trash2 className="mr-2 h-4 w-4" /> Remove</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-2xl border-slate-800 bg-slate-950 shadow-xl">
        <CardContent className="p-6">
          <ShieldCheck className="h-9 w-9 text-blue-300" />
          <h3 className="mt-4 text-xl font-bold text-white">Beta Safeguards</h3>
          <p className="mt-2 text-sm text-slate-400">Use simulated rewards, simulated wallet balances, store approval rules and basic fraud controls before real money integrations.</p>
          <div className="mt-5 space-y-3">
            <Badge>Location validation</Badge>
            <Badge>Prize audit log</Badge>
            <Badge>User verification</Badge>
            <Badge>Store approval</Badge>
            <Badge>No live cash payouts</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function FreestBetaPrototype() {
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("app");
  const [stores, setStores] = useState(initialStores);
  const [prizes, setPrizes] = useState(starterPrizes);
  const [activeStore, setActiveStore] = useState(initialStores[0]);
  const totalVisits = useMemo(() => stores.reduce((sum, store) => sum + store.visits, 0), [stores]);

  if (!user) return <LoginScreen setUser={setUser} />;

  const tabs = [
    { id: "app", label: "User App", icon: MapPin, roles: ["user", "store", "admin"] },
    { id: "wallet", label: "Wallet", icon: Wallet, roles: ["user", "admin"] },
    { id: "store", label: "Store Dashboard", icon: Store, roles: ["store", "admin"] },
    { id: "admin", label: "Admin", icon: Settings, roles: ["admin"] },
  ].filter((t) => t.roles.includes(user.role));

  return (
    <div className="min-h-screen bg-slate-950 p-4 text-slate-100 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 shadow-2xl">
          <div className="grid gap-6 p-6 lg:grid-cols-[1.15fr_.85fr] lg:p-8">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Functional Beta Prototype</Badge>
                <Badge>Investor Demo Ready</Badge>
                <Badge>Browser-Based MVP</Badge>
              </div>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">Free$t.</h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-300">A functional beta for driving foot traffic into brick-and-mortar stores through treasure hunts, prize discovery, avatars, proximity messaging and reward wallets.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => setTab("app")} className="rounded-xl bg-blue-600 hover:bg-blue-500"><Gift className="mr-2 h-4 w-4" /> Launch Demo</Button>
                <Button onClick={() => setUser(null)} variant="outline" className="rounded-xl border-slate-700 bg-slate-950 text-slate-100 hover:bg-slate-900"><LogOut className="mr-2 h-4 w-4" /> Switch User</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <StatCard icon={Store} label="Demo Stores" value={stores.length} sub="Enrolled locally" />
              <StatCard icon={Users} label="Demo Visits" value={totalVisits} sub="Prototype data" />
              <StatCard icon={Crown} label="Prize Pool" value="$10M" sub="Concept ceiling" />
              <StatCard icon={Star} label="Avatars" value={avatars.length} sub="Collectible beta set" />
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-2">
          <div className="flex flex-wrap gap-2">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${tab === id ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-800"}`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 px-3 text-sm text-slate-300"><Eye className="h-4 w-4 text-blue-300" /> Viewing as {user.name}</div>
        </div>

        {tab === "app" && <UserApp stores={stores} prizes={prizes} setPrizes={setPrizes} activeStore={activeStore} setActiveStore={setActiveStore} />}
        {tab === "wallet" && <WalletScreen prizes={prizes} setPrizes={setPrizes} />}
        {tab === "store" && <StoreDashboard stores={stores} setStores={setStores} />}
        {tab === "admin" && <AdminScreen stores={stores} setStores={setStores} />}

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <Bell className="h-6 w-6 text-blue-300" />
            <h3 className="mt-3 font-bold text-white">Proximity Messaging</h3>
            <p className="mt-2 text-sm text-slate-400">Stores target users by location, interests, prize preferences, avatars and merchandise categories.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <Lock className="h-6 w-6 text-blue-300" />
            <h3 className="mt-3 font-bold text-white">Controlled Beta Mode</h3>
            <p className="mt-2 text-sm text-slate-400">All rewards, cards and prize balances are simulated until real payment, banking and compliance integrations are approved.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <Smartphone className="h-6 w-6 text-blue-300" />
            <h3 className="mt-3 font-bold text-white">Mobile-Ready Web App</h3>
            <p className="mt-2 text-sm text-slate-400">Deploy as a private web link first, then package into iOS and Android after investor and store validation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
