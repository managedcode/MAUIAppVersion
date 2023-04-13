# Update MAUI App Version Action

This action updates the application version and/or display version properties in a .cproj file for a MAUI application. You can use this action as part of your CI/CD workflow to automatically update the version properties when building and publishing your MAUI application.

## Inputs

### `csproj` (required)

The path to the .cproj file for your MAUI application.

### `version`

The new value to set for the `ApplicationVersion` property in the .cproj file. If this input is not provided, the `ApplicationVersion` property will not be updated.

### `displayVersion`

The new value to set for the `ApplicationDisplayVersion` property in the .cproj file. If this input is not provided, the `ApplicationDisplayVersion` property will not be updated.

### `printFile`

Whether to print the contents of the updated .cproj file to the console. Set to `true` to print the contents of the file, or leave blank to not print the file contents.


## Example usage

```yaml
uses: managedcode/MAUIAppVersion@v1
with:
  csproj: 'path/to/my-project.csproj'
  version: ${{ github.run_number }} # to keep value unique
  displayVersion: '1.0.0'
  printFile: true # optional
```

This example updates the `ApplicationVersion` property to `128` and the `ApplicationDisplayVersion` property to `1.0.0` in the .cproj file located at `path/to/my-project.csproj`. The contents of the updated .cproj file will be printed to the console.