import { expect, describe, it, test } from 'vitest'
import { cleanWhitespace } from "./string.utils";

describe("cleanWhitespace", () => {
    it("should remove leading and trailing whitespace", () => {
      const result = cleanWhitespace("  hello world  ");
      expect(result).toBe("hello world");
    });
  
    it("should replace multiple newlines with a single space", () => {
      const result = cleanWhitespace("\nhello\nworld\n");
      expect(result).toBe("hello world");
    });
  
    it("should replace multiple spaces with a single space", () => {
      const result = cleanWhitespace("hello    world");
      expect(result).toBe("hello world");
    });
  
    it("should handle a combination of newlines and spaces", () => {
      const result = cleanWhitespace("\n  hello   \nworld  \n");
      expect(result).toBe("hello world");
    });
  
    it("should return an empty string when input is empty", () => {
      const result = cleanWhitespace("");
      expect(result).toBe("");
    });
  });