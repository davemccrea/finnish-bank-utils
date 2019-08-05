// Type definitions for finnish-bank-utils 1.3.3
// Project: https://github.com/vkomulai/finnish-bank-utils
// Defintitions by Ashley K. Smith https://github.com/ashksmith

export function isValidFinnishRefNumber(referenceNumber: string): boolean;
export function isValidFinnishIBAN(ibanNumber: string): boolean;
export function formatFinnishRefNumber(referenceNumber: string): string;
export function formatFinnishIBAN(ibanNumber: string): string;
export function formatFinnishVirtualBarCode(barCode: {iban: string; sum: number; reference: string; date: string; }): string;
export function parseFinnishVirtualBarCode(barCode: string): { iban: string; sum: number; reference: string; date: string };
export function generateFinnishRefNumber(initial?: string): string;
export function generateFinnishIBAN(): string;
