
import React from 'react';
import { Project, NavLink, Service } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'AI Assistant', href: '#ai-tool' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina Branding',
    category: 'Brand Identity',
    description: 'A minimalist approach to lighting design branding, focusing on negative space and clean typography.',
    imageUrl: 'https://picsum.photos/seed/lumina/1200/1600',
    color: '#F3F4F6',
  },
  {
    id: '2',
    title: 'Ethereal Magazine',
    category: 'Editorial Design',
    description: 'Biannual publication design exploring the intersection of digital art and nature.',
    imageUrl: 'https://picsum.photos/seed/ethereal/1200/1600',
    color: '#E5E7EB',
  },
  {
    id: '3',
    title: 'Velvet Packaging',
    category: 'Package Design',
    description: 'Sustainable luxury packaging for a boutique skincare line using recycled materials.',
    imageUrl: 'https://picsum.photos/seed/velvet/1200/1600',
    color: '#F9FAFB',
  },
  {
    id: '4',
    title: 'Obsidian App UI',
    category: 'Digital Product',
    description: 'High-fidelity user interface for a dark-mode first task management ecosystem.',
    imageUrl: 'https://picsum.photos/seed/obsidian/1200/1600',
    color: '#F3F4F6',
  },
  {
    id: '5',
    title: 'Prism Poster Series',
    category: 'Visual Art',
    description: 'Experimental geometric poster series using holographic printing techniques.',
    imageUrl: 'https://picsum.photos/seed/prism/1200/1600',
    color: '#E5E7EB',
  },
  {
    id: '6',
    title: 'Horizon Web Design',
    category: 'Web Experience',
    description: 'Interactive portfolio experience for a global architectural firm.',
    imageUrl: 'https://picsum.photos/seed/horizon/1200/1600',
    color: '#F9FAFB',
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Visual Identity',
    description: 'Crafting unique brand voices through logos, color palettes, and typography.',
    icon: '✨',
  },
  {
    title: 'Web & Digital',
    description: 'Building immersive digital experiences that marry aesthetics with functionality.',
    icon: '🌐',
  },
  {
    title: 'Print & Packaging',
    description: 'Tactile design solutions that stand out on shelves and in hands.',
    icon: '📦',
  },
];
