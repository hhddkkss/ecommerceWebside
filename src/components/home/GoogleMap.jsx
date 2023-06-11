import React, { useMemo } from 'react'
//step 1: npm @react-google-maps/api'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { Box } from '@mui/material'

/**vite定義環境變數寫法：
 * 1.在.env裡 給定一個環境變數 需要加上VITE_ 前綴字
 * 2.在要引用的檔案中 import.meta.env.＋ 環境變數 才可以讀取的到變數
 * 3.讀不到時 => undefined
 * */

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY
const Mymap = () => {
  //step 2: 將api寫入後 解構出isLoaded來看看是否成功 使用useJSApiLoader
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: apiKey,
  })

  //step 3: 如果寫入失敗 顯示的訊息
  if (!isLoaded) return <div>isLoading....</div>

  return <Map />
}

export default Mymap

/** step 4:
 * 新增一個Map元件 裡面至少要給3個props (zoom, center ,mapContainerStyle)
 * zoom => 焦距的倍數 建議可以給10
 * center => 地圖的中心
 * mapContainerStyle => 限制map的高度
 *
 * 因為物件中的資料是參照 所以把經緯度變成一個變數 可以確保移動時不會一直re-render
 * 可以用useMemo包起來
 * */

function Map() {
  const positionData = useMemo(() => [
    { lat: 25.036339, lng: 121.568567 },
    { lat: 25.123042, lng: 121.789891 },
    { lat: 24.999091, lng: 121.563122 },
    { lat: 24.896339, lng: 121.121567 },
    { lat: 24.989934, lng: 121.452567 },
  ])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GoogleMap
        zoom={9}
        center={{ lat: 25.036339, lng: 121.568567 }}
        mapContainerStyle={{
          height: '400px',
          width: '100%',
          borderRadius: '5px',
          overflow: 'visible',
        }}
      >
        {positionData.map((item, i) => (
          <Marker key={i} position={item} />
        ))}
      </GoogleMap>
    </Box>
  )
}
