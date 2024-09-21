"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Settings/Sidebar";
import { AccountCard } from "@/components/Settings/AccountCard";
import {
  Bell,
  CreditCard,
  DollarSign,
  Link,
  Lock,
  LucideIcon,
  Mail,
  Settings,
  Shield,
  User,
  Users,
  UsersIcon,
} from "lucide-react";
import AdditionalAccounts from "@/components/Settings/AdditionalAccounts";
import Header from "@/components/LandingPageFeed/Header";

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  subItems: { id: string; label: string; icon: LucideIcon }[];
}

const menuItems: MenuItem[] = [
  {
    id: "billing",
    label: "Billing",
    icon: CreditCard,
    subItems: [
      { id: "billing-payments", label: "Billing & Payments", icon: DollarSign },
    ],
  },
  {
    id: "user",
    label: "User Settings",
    icon: User,
    subItems: [
      { id: "contact", label: "Contact Info", icon: Mail },
      { id: "profile", label: "My Profile", icon: User },
      { id: "profile-settings", label: "Profile Settings", icon: Settings },
      { id: "get-paid", label: "Get Paid", icon: DollarSign },
      { id: "teams", label: "My Teams", icon: UsersIcon },
      { id: "connected-services", label: "Connected Services", icon: Link },
      { id: "password-security", label: "Password & Security", icon: Lock },
      { id: "identity", label: "Identity Verification", icon: Shield },
      { id: "notifications", label: "Notification Settings", icon: Bell },
    ],
  },
];

export default function SettingsPage() {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("contact");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showSaveConfirmation, setShowSaveConfirmation] =
    useState<boolean>(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setShowSaveConfirmation(true);
    setTimeout(() => setShowSaveConfirmation(false), 3000);
  };

  return (
    <>
      <Header toggleLeftSidebar={() => {}} toggleRightSidebar={() => {}} />
      <div className="flex min-h-screen bg-[#1e2330] text-gray-200 mt-16">
        <Sidebar
          menuItems={menuItems}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto bg-[#1e2330]">
          <h2 className="text-2xl font-bold text-gray-200 mb-6">
            Contact Info
          </h2>
          <AccountCard
            isEditing={isEditing}
            handleEdit={handleEdit}
            handleSave={handleSave}
            showSaveConfirmation={showSaveConfirmation}
          />

          <AdditionalAccounts />
          {/* Add your other sections here */}
        </div>
      </div>
    </>
  );
}
