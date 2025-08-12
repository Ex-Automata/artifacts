# Ex Automata Artifacts Repository

This repository serves as a centralized artifact distribution system for Ex Automata applications. It provides real-time access to application updates, shared resources, and configuration files.

## 🎯 Purpose

The artifacts repository is designed to:

- **Notify applications of updates** - Provide version information and download links for application modules
- **Serve shared resources** - Host common assets like color palettes, stylesheets, and configuration files
- **Enable dynamic content delivery** - Allow Ex Automata apps to fetch resources on-demand
- **Centralize module management** - Maintain metadata about available modules and their dependencies

## 🔧 How It Works

This repository is hosted via GitHub Pages at `artifact.exautomata.ai` and serves content directly to Ex Automata applications through HTTP requests.

## 🚀 Usage

Applications can fetch resources by making HTTP requests to:
```
https://artifact.exautomata.ai/[resource-path]
```

Example API endpoints:
- Module registry: `https://artifact.exautomata.ai/metadata/available_modules.json`
- Specific resources: `https://artifact.exautomata.ai/[category]/[resource]`

## 📋 Adding New Resources

To add new artifacts:

1. **For metadata updates:**
   - Edit `metadata/available_modules.json`
   - Add new module entries with proper versioning
   - Include all required fields (name, labels, versions, dependencies)

2. **For new resource types:**
   - Create appropriate directory structure
   - Add files with meaningful names
   - Update documentation

3. **For updates:**
   - Increment version numbers appropriately
   - Update dependency mappings if needed
   - Test compatibility with existing modules

## 🔗 Related Links

- [Ex Automata Website](https://exautomata.ai)
- [Module Releases](https://github.com/Syzygy2048/paige_artifacts/releases)

## 📝 Contributing

When contributing to this repository:

1. Ensure all files are properly formatted
2. Test artifact accessibility before committing
3. Maintain backward compatibility when possible
4. Document any breaking changes
5. Follow semantic versioning for module updates

## ⚠️ Important Notes

- This repository is publicly accessible via GitHub Pages
- Changes are automatically deployed when pushed to the main branch
- Ensure sensitive information is never committed
- Test download links before publishing module updates

---

*This repository is maintained by the Ex Automata team for seamless application resource delivery.*
