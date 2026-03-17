# Copier templates

Opinionated project templates for scaffolding projects like a python package, Django project, Vite project etc. Focus on Docker based development, following the [Zen of Python](https://peps.python.org/pep-0020/) philosophy of "Simple is better than complex".

## Prerequisites

- Docker ([Colima](https://github.com/abiosoft/colima) recommended)
- [Copier](https://github.com/copier-org/copier)

## Examples

### Python Package

```bash
copier copy --trust -d "template=python-package" -d "project_name=Sample Python Package" gh:mj026/copier-templates ./sample-python-package
```

### Vite Project

```bash
copier copy --trust -d "template=vite-project" -d "project_name=Sample Vite Project" gh:mj026/copier-templates ./sample-vite-project
```