import re

with open("src/app/page.tsx", "r") as f:
    content = f.read()

# Revert heading colors
content = content.replace('text-[#081a36]', 'text-secondary dark:text-white')
content = content.replace('text-gray-800 dark:text-gray-100', 'text-gray-800 dark:text-gray-100') # ensure no double revert if run twice
# Except text-[#081a36] in Navigation? We are modifying page.tsx.
content = content.replace('<h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-secondary dark:text-white mb-8 leading-none tracking-tight">', '<h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-none tracking-tight">')

# Hero section
content = content.replace('bg-white overflow-hidden', 'bg-hero-pattern overflow-hidden')
content = re.sub(r'<img src="https://lh3.googleusercontent.com/aida-public/.*? alt="Background Texture" />\s*<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90 justify-center flex"></div>', r'<div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/90 dark:from-black/80 dark:via-black/50 dark:to-background-dark"></div>', content, flags=re.DOTALL)

# Hero link
content = content.replace('border-primary text-secondary dark:text-white hover:bg-primary', 'border-primary text-secondary dark:text-white hover:bg-primary') # wait text [#081... was replaced above

# Sections backgrounds
content = content.replace('py-32 bg-white relative overflow-hidden', 'py-32 bg-background-light dark:bg-background-dark relative overflow-hidden')
content = content.replace('opacity-[0.03]', 'opacity-5')

content = content.replace('py-32 bg-[#f8f9fa] border-t border-gray-100', 'py-32 bg-secondary dark:bg-black relative border-t border-primary/20')
# Buttons
content = content.replace('border border-secondary dark:text-white/20 rounded-full flex items-center justify-center text-secondary dark:text-white hover:bg-secondary dark:text-white hover:text-white transition-all duration-300 group', 'border border-primary/20 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 group')
content = content.replace('border border-[#081a36]/20 rounded-full flex items-center justify-center text-[#081a36] hover:bg-[#081a36] hover:text-white transition-all duration-300 group', 'border border-primary/20 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 group')

# Cards
content = content.replace('bg-white pb-6 rounded shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden', 'bg-background-light dark:bg-background-dark pb-6 rounded-sm shadow-lg overflow-hidden')
content = content.replace('bg-white/90 backdrop-blur px-3 py-1 rounded-sm shadow-sm', 'bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-sm')
content = content.replace('text-gray-500 dark:text-gray-400 text-sm italic', 'text-gray-500 dark:text-gray-400 text-sm italic')

# Add to cart float buttons inside dishes - remove them!
content = re.sub(r'<!-- Floating Add to Cart Button -->', '', content)
content = re.sub(r'<button\s*className="absolute right-4 bottom-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-secondary dark:text-white hover:bg-secondary dark:text-white hover:text-white transition-all duration-300 z-30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"\s*aria-label="Add to cart"\s*>\s*<span className="material-symbols-outlined font-light">shopping_bag</span>\s*</button>', '', content)
content = re.sub(r'<button\s*className="absolute right-4 bottom-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-[#081a36] hover:bg-[#081a36] hover:text-white transition-all duration-300 z-30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"\s*aria-label="Add to cart"\s*>\s*<span className="material-symbols-outlined font-light">shopping_bag</span>\s*</button>', '', content)
content = re.sub(r'/\* Floating Add to Cart Button \*/', '', content)

# Unforgettable Evening
content = content.replace('py-32 relative bg-[#f8f9fa]', 'py-32 relative bg-secondary dark:bg-black')
content = content.replace('<div className="absolute inset-0 opacity-5">', '<div className="absolute inset-0 opacity-20 dark:opacity-30">')
content = content.replace('bg-white p-6 md:p-8 rounded shadow-xl max-w-4xl mx-auto border border-gray-100', 'bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-sm border border-white/10 shadow-2xl max-w-4xl mx-auto')
content = content.replace('bg-white border border-gray-200 text-secondary dark:text-white rounded-sm px-4 py-3 focus:ring-secondary dark:text-white focus:border-secondary dark:text-white font-serif placeholder-gray-400', 'bg-white/10 border border-white/20 text-white rounded-sm px-4 py-3 focus:ring-primary focus:border-primary font-serif placeholder-gray-400')
content = content.replace('bg-[#081a36] hover:bg-primary text-white', 'bg-primary hover:bg-[#b8952b] text-white')
content = content.replace('bg-secondary dark:text-white hover:bg-primary text-white', 'bg-primary hover:bg-[#b8952b] text-white')

# Footer
content = content.replace('bg-white border-t border-gray-200 pt-24 pb-12', 'bg-background-light dark:bg-background-dark border-t border-primary/20 pt-24 pb-12')
content = content.replace('border-b border-gray-200 pb-2 inline-block', 'border-b border-primary/30 pb-2 inline-block')
content = content.replace('text-gray-500 font-light text-sm', 'text-gray-500 dark:text-gray-400 font-light text-sm')
content = content.replace('text-gray-500 font-light text-base', 'text-gray-500 dark:text-gray-400 font-light text-base')

with open("src/app/page.tsx", "w") as f:
    f.write(content)

