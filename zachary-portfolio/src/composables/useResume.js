import { contact } from '@/data/resume'

/**
 * Provides a downloadResume() function that triggers
 * a browser download of the resume PDF.
 */
export function useResume() {
  function downloadResume() {
    const link = document.createElement('a')
    link.href = contact.resumeFile
    link.download = contact.resumeDownloadName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return { downloadResume }
}
