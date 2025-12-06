/**
 * Environment Configuration for Docusaurus
 * 
 * To set backend URL for production:
 * 1. During build: Set BACKEND_URL environment variable
 * 2. At runtime: Add to window object in custom script
 */

// This will be replaced during build if BACKEND_URL env var is set
export const BACKEND_URL = typeof window !== 'undefined'
    ? (window as any).BACKEND_URL || 'http://localhost:8000'
    : 'http://localhost:8000';
