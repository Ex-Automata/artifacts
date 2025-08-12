# Metadata Directory

This directory contains metadata files that provide essential information about Ex Automata applications and modules.

## 📄 Files

### `available_modules.json`

The primary registry file containing information about all available modules in the Ex Automata ecosystem.

#### Field Descriptions

- **`name`** - Human-readable module name
- **`labels`** - Localized descriptions and metadata
  - **`en`** - English localization object
    - **`description`** - Brief description of the module's purpose
- **`required`** - Boolean indicating if this module is mandatory for the application
- **`versions`** - Array of available versions for this module
  - **`download`** - Direct download URL for the module package
  - **`version`** - Semantic version number (major.minor.patch)
  - **`module_dependencies`** - Array of required dependencies with their version constraints

## 🔄 Current Modules

### Paige Core
- **Type:** Required foundational module
- **Purpose:** Core functionality that integrates all other modules
- **Dependencies:** AI Engine v0.0.1

### AI Engine  
- **Type:** Required processing module
- **Purpose:** Handles AI operations, user input processing, and response generation
- **Dependencies:** Paige Core v0.0.1

## 📝 Updating Module Information

When updating module metadata:

1. **Adding a new module:**
   ```json
   {
     "name": "New Module Name",
     "labels": {
       "en": {
         "description": "What this module does"
       }
     },
     "required": false,
     "versions": [
       {
         "download": "https://download.exautomata.ai/path/to/module.paige",
         "version": "1.0.0",
         "module_dependencies": []
       }
     ]
   }
   ```

2. **Adding a new version:**
   - Add a new object to the `versions` array
   - Increment version number appropriately
   - Update dependencies if changed
   - Ensure download URL is accessible

3. **Localization:**
   - Add new language codes under `labels`
   - Maintain consistent structure across languages
   - Currently supported: `en` (English)

## ⚠️ Important Notes

- **Version Format:** Use semantic versioning (major.minor.patch)
- **Download URLs:** Must be publicly accessible and stable
- **Dependencies:** Ensure all referenced modules exist in the registry
- **JSON Validation:** Validate JSON syntax before committing changes
- **Backward Compatibility:** Consider existing installations when updating

## 🔍 Validation

Before committing changes:

1. Validate JSON syntax using a JSON validator
2. Verify all download URLs are accessible
3. Check that all dependencies reference existing modules
4. Test with a sample application if possible

---

*This metadata drives the Ex Automata module system and update notifications.*
