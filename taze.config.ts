import { defineConfig } from 'taze';

export default defineConfig({
  mode: 'major',
  include: ['/rstack/', '/@rsdoctor/', '/vize/', '/oxlint/', '/oxfmt/'],
  write: true,
  recursive: true
});
