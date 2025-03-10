/* eslint-disable no-undef */


import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isMobile, loadExternalResource } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'


/**
 * 网页动画
 * @returns
 */
function Live2D() {
  const [mounted, setMounted] = useState(false)
  const l2dRef = useRef(null);
  const model = useRef(null); // 修复行
  const { theme, switchTheme } = useGlobal()
  const showPet = JSON.parse(siteConfig('WIDGET_PET'))
  const petLink = siteConfig('WIDGET_PET_LINK')
  const petSwitchTheme = siteConfig('WIDGET_PET_SWITCH_THEME')
  useEffect(() => {
    setMounted(true) // 客户端标记
  }, [])

  useEffect(() => {
   
    if (mounted && showPet && !isMobile()) {

      import('l2d').then(({ init }) => {
        const l2d = init(l2dRef.current);
        l2d.create({
          path: petLink,
        }).then(res => {
          if (res) { // 添加结果校验
            model.current = res;
          }
        });
      });

      return () => {
        // 添加null安全检查
        if (model.current) {
          model.current.destroy();
          model.current = null;
        }
      };
    }
  }, [mounted, theme, showPet]);

  function handleClick() {
    if (petSwitchTheme) {
      switchTheme()
    }
  }

  
  if (!showPet || !mounted) {
    return null
  }

  return (
    <div style={{ width: 300, height: 500 }}>
      <canvas
        ref={l2dRef}
        onClick={handleClick}
      />
    </div>
  );
}

export default Live2D;
