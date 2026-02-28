// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (C) 2026 Giancarlo Erra - Altaire Limited
import { createHash } from "node:crypto";
import path from "node:path";

/**
 * Generate a stable project ID from an absolute folder path.
 * Uses a short SHA-256 prefix so collection names stay Qdrant-friendly.
 */
export function projectIdFromPath(folderPath: string): string {
  const normalized = path.resolve(folderPath);
  return createHash("sha256").update(normalized).digest("hex").slice(0, 12);
}

/**
 * Derive a Qdrant collection name for a project's code chunks.
 */
export function collectionName(projectId: string): string {
  return `codebase_${projectId}`;
}

/**
 * Derive a Qdrant collection name for a project's code graph.
 */
export function graphCollectionName(projectId: string): string {
  return `codegraph_${projectId}`;
}

/**
 * Derive a Qdrant collection name for a project's context artifacts.
 */
export function contextCollectionName(projectId: string): string {
  return `context_${projectId}`;
}
