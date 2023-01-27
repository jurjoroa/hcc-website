--[[
# MIT License
#
# Copyright (c) Mickaël Canouil
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
]]

local function ensure_html_deps()
  quarto.doc.add_html_dependency({
    name = 'elevatorjs',
    version = '1.0.0',
    scripts = {"elevator.min.js"}
  })
end

local function is_empty(s)
  return s == '' or s == nil
end

return {
  ["elevator"] = function(args, kwargs)
    if quarto.doc.is_format("html:js") then
      ensure_html_deps()

      local textButton = 'Return to the top!'
      local targetAnchor = ''
      if #args > 0 then
        textButton = pandoc.utils.stringify(args[1])
        if #args > 1 then
          targetAnchor = 'targetElement: document.querySelector("#' .. pandoc.utils.stringify(args[2]) .. '"), '
        end
      end

      mainAudio = pandoc.utils.stringify(kwargs["audio"])
      if is_empty(mainAudio) then
        mainAudio = ''
      end

      endAudio = pandoc.utils.stringify(kwargs["end"])
      if is_empty(endAudio) then
        endAudio = "ding.mp3"
        quarto.doc.add_format_resource(endAudio)
      end

      return pandoc.RawInline(
        'html',
        '<script>' ..
          'window.onload = function() { ' ..
            'var elevator = new Elevator({ ' ..
              'element: document.querySelector(".elevator-button")' ..
              ', ' .. 
              targetAnchor ..
              ' mainAudio: "' .. mainAudio .. '",' ..
              ' endAudio: "' .. endAudio .. '"' ..
            ' });' ..
          ' }' ..
        '</script>' ..
        '<button class="btn btn-outline-primary elevator-button" type="submit">' .. textButton .. '</button>'
      )
    else
      return pandoc.Null()
    end
  end
}
