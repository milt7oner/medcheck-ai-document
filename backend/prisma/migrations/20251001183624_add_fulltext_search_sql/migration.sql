-- 1. Agregar columna si no existe
ALTER TABLE "Document"
ADD COLUMN IF NOT EXISTS "ocrTextVector" tsvector GENERATED ALWAYS AS (
  to_tsvector('spanish', coalesce("ocrText", ''))
) STORED;

-- 2. Crear índice GIN si no existe
CREATE INDEX IF NOT EXISTS "idx_document_ocrTextVector"
ON "Document" USING GIN ("ocrTextVector");
