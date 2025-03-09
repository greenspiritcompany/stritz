<?php
header("Location: kingcom?country=IN&locale=en&timeZone=GMT%2B05%3A30&sdkVersion=17sg285&sdkPort=&cdnHost=k1.midasplayer.com&email=7bxsaRqonjRpu3ANBunq1g.3.a%40u.king.com");

/* for generating content.xml content

function listFilesRecursive($dir) {
    $files = [];

    if (is_dir($dir)) {
        $items = scandir($dir);

        foreach ($items as $item) {
            if ($item == '.' || $item == '..') {
                continue;
            }

            $path = $dir . DIRECTORY_SEPARATOR . $item;

            if (is_dir($path)) {
                $files = array_merge($files, listFilesRecursive($path));
            } else {
                $files[] = $path;
            }
        }
    }
	
	return $files;
}

$result = '';
foreach (listFilesRecursive("resources") as $a) {
		$isImage = false;
	if (str_contains($a, ".png")) {
		$isImage = true;
	}
	else if (str_contains($a, ".jpg")) {
		$isImage = true;
	}
	
	$result .= '		<'.($isImage ? "image" : "binary").' filename="'.str_replace('\\', '/', str_replace("resources\\", '', $a)) . '" size="'.filesize($a).'"/>
';
}
file_put_contents("content.xml",$result);*/