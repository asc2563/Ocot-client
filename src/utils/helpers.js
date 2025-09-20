// This file contains utility functions that can be used throughout the application.

/**
 * Loads a JSON file and returns its contents as an object.
 * @param {string} file - The path to the JSON file (relative to public root or absolute).
 * @returns {Promise<any>} The parsed JSON object.
 */
export async function loadJson(file) {
  try {
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(`Failed to load ${file}: ${response.statusText}`);
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
