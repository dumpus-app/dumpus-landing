#!/usr/bin/env bash
# Deploy dumpus-landing to AWS (S3 + CloudFront).
# Requires: pnpm, awscli v2, AWS creds with access to the dumpus-app prod account.

set -euo pipefail

BUCKET="dumpus-app-landing"
DISTRIBUTION_ID="E3QLCNIH63M129"

pnpm install --frozen-lockfile
pnpm run build

aws s3 sync dist/ "s3://${BUCKET}/" \
    --delete \
    --cache-control "public, max-age=3600"

aws cloudfront create-invalidation \
    --distribution-id "${DISTRIBUTION_ID}" \
    --paths '/*' \
    --query 'Invalidation.{Id:Id,Status:Status}'

echo "Deployed. Live at https://dumpus.app"
