const messages = {
    "header": {
        "nav": {
            "discover": "発見",
            "channels": "チャンネル",
            "find": "検索",
            "talk": "しゃべる"
        },
        "actions": {
            "join": "今すぐ登録して！",
            "login": "ログイン"
        }
    },
    "login": {
        "header": "ログイン",
        "banned": {
            "message": "あなたのアカウントが禁じられました。 間違いだと思うなら、 上訴することができます。",
            "appealLinkText": "上訴のフォーム"
        },
        "form": {
            "usernamePlaceholder": "ユーザー名",
            "passwordPlaceholder": "パスワード",
            "loginButton": "ログイン"
        },
        "snackbar": {
            "welcomeBack": "おかえりなさい、{username}様",
            "error": {
                "fillOut": "全ての欄を記入してください。",
                "serverError": "サーバーとのエラーが発生しました。 後でやり直してください。",
                "userDoesntExist": "このアカウントは存在していません。",
                "passwordWrong": "パスワードが正しくないです。",
                "banned": "このアカウントが禁じられました。 理由： {reason}"
            }
        }
    },
    "logout": {
        "header": "早く戻ってください。",
        "text": "ログアウト成功！<br />MyGarage.gamesを使ってくれてありがとうございました。",
        "snackbar": {
            "successful": "正常にログアウトされました。"
        }
    },
    "oauthDiscordCallback": {
        "header": "Discordを通じてログイン",
    },
    "register": {
        "header": "新しいアカウントを作る",
        "form": {
            "usernamePlaceholder": "ユーザー名",
            "usernameRequirements": "許可している文字： a～z, A～Z, 0-9, ハイフン (-), アンダースコア (_)",
            "passwordPlaceholder": "パスワード",
            "passwordAgainPlaceholder": "パスワード (も一度)",
            "emailPlaceholder": "メールアドレス",
            "registerButton": "登録する"
        },
        "snackbar": {
            "success": "正常に新しいアカウントが作られました。",
            "error": {
                "emailInvalid": "有効なメールアドレスを使ってください。",
                "passwordNotEqual": "入力されたパスワードは同様ではありません。",
                "registerServerError": "サーバーエラーが発生したので、新しいアカウントが作られませんでした。後でやり直してください。",
                "inUse": "このユーザー名またはメールアドレスはすでに使用中です。"
            }
        }
    },
    "index": {
        "welcome": "MyGarage.gamesのベータへようこそ！<br />Discordサーバーでバグとフィードバックを報告してください！",
        "support": "もしあなたが私たちをサポートしたり、このサイトのサーバーに資金を提供したいのであれば、PayPalに寄付するか、itch.ioで私たちのゲームを購入することを検討してみてください。MyGarage.gamesを広告や\「プラス・メンバーシップ\」システムから解放しておきたいと考えています。<i>&dash; ローラさん</i>",
        "newestHeader": "新着ゲーム",
        "hotThisWeekHeader": "期待のコース",
        "randomHeader": "お任せ",
        "popularHeader": "人気のゲーム",
        "previousPage": "戻る",
        "nextPage": "次へ"
    },
    "find": {
        "header": "検索",
        "searchboxPlaceholder": "検索問い合わせを入力してください。",
        "noresults": "０ゲームが見つかりました。<br />別の検索を試してください。"
    },
    "talk": {
        "header": "しゃべる",
        "explaination": "このゲームのコミュニティーがでかい！ ここでは、他のコミュニティプロジェクトがあり、その上、溜まり場たちでクリエイターを見つけたり、「Game Builder Garage」のことをもっと知ることができます！",
        "missing": "見逃しているプロジェクトはありませんか？ Discordで知らせてお願いします！"
    },
    "channelOverview": {
        "header": "チャンネル概要",
        "explaination": "コンセプト、ジャンルやテーマによりゲームを見つける。"
    },
    "channelDetail": {
        "snackbar": {
            "serverError": "サーバーエラーによって、チャンネルが読み込まれませんでした。後でやり直してください。",
            "notFound": "０チャンネルが見つかりました。"
        }
    },
    "gameAdd": {
        "header": "新しいゲームを追加する",
        "explaination": "「ナビつき! つくってわかる はじめてゲームプログラミング」を使ってゲームを作ったか？<br />MyGarage.gamesに投稿して世界と共有しましょう！",
        "rules": {
            "header": "投稿規定",
            "maynot": "次のルールを<strong>従ってください。</strong>",
            "ruleHateful": "下品、性差別的、性的指向を差別して、憎いコンテンツを含むゲームは禁止です。人種差別と民族的少数派に対する差別も含みます。",
            "ruleIP": "著作権と知的財産を侵すゲームは禁止です。",
            "ruleExplicit": "裸、強い暴力、他の強いコンテンツは禁止です。ゲーム内のコンテンツ、メディアアセットや記述も含みます。",
            "ruleLowEffort": "同一のゲームに対して複数の投稿をしないでください。労力の少ないコンテンツは投稿しないでください。",
            "ruleContentNotice": "癲癇（てんかん）を持つ人を保護するために、ゲーム内のストロボ効果があれば、記述で警告を含めてください。",
            "ruleModeration": "管理チームは、必要に応じて、スクリーンショットを非表示にしたり、ビデオや投稿作品を削除または非表示にしたりします。投稿ルールに違反する行為が続いた場合、今後のコンテンツ投稿を禁止したり、アカウントを無効にすることがあります。",
            "ruleDiscretion": "これらのルールは、完全なリストを示すものではありません。サイト管理人は、常に自らの裁量で行動します。私たちは、必要に応じてこのルールセットを調整し、いかなるルールにも例外を設ける権利を有します。"
        },
        "general": {
            "header": "一般情報",
            "form": {
                "title": "作品名",
                "titlePlaceholder": "私の素晴らしいゲーム",
                "description": "作品を記述してください。どんな体験ですか？どのように遊びますか？",
                "ingameID": "ゲームの中のアップされた作品のIDを入力してください。",
                "ingameIDPlaceholder": "G-000-000-000"
            }
        },
        "discoverability": {
            "header": "発見可能性",
            "form": {
                "displayStatus": "見ることできるべき人は？",
                "displayStatus0": "みんな",
                "displayStatus1": "非公開 ～ リンクを持つ人にしかアクセスできません。",
                "displayStatus2": "プライベート ～ 自分にしかアクセスできません。",
                "channels": "自分のゲームに関するチャンネルを選んでください。 (複数のチャンネルを選ぶために、CTRLを押しながらクリックしてください。)",

            }
        },
        "media": {
            "header": "他のメディア",
            "form": {
                "coverFile": "カバー画像(16:9形式、JPG／JPEGまたはPNG)",
                "youtubeUrl": "YouTube動画がありますか？リンクをここに入力して！"
            }
        },
        "done": {
            "success": {
                "header": "それでおしまい！",
                "text": "ゲームが正常に公開されました。ゲームページでは、スクリーンショットを追加して、テーマを変更して、ゲームを共有することができます。",
                "coverWrongFormat": "カバー画像は無効なファイルなので、アップされませんでした。PNGとJPEG／JPGというファイルだけ有効です。"
            },
            "error": {
                "header": "おっと！",
                "text": "ゲームを投稿する最中に、エラーが発生しました。後でやり直してください。"
            }
        },
        "requiredNotice": "* = 必須",
        "action": {
            "backButton": "戻る",
            "agreeButton": "同意する",
            "continueButton": "続ける",
            "goToGameButton": "ゲームページに戻る"
        },
        "snackbar": {
            "fillOut": "全ての必須入力を記入してください。",
            "gameIDInvalid": "ゲームIDは無効です。(正しい形式：G-000-000-000)."
        }
    },
    "gameDelete": {
        "header": "ゲームを削除すること",
        "explaination": "すべての操作は不可逆なので、よく考えてください。",
        "confirm": {
            "header": "削除するのはよろしいですか？",
            "text": "MyGarage.gamesから「<strong>{gameTitle}</strong>」というゲームを削除しようとしています。すると、すべてのそのゲームに関するイメージとコメントが削除されます。 この操作操作は不可逆です。",
            "nevermindButton": "いいえ",
            "yesButton": "はい"
        },
        "snackbar": {
            "success": "ゲームが削除されました。",
            "error": "ゲームが削除できませんでした。"
        }
    },
    "gameDetail": {
        "action": {
            "edit": "詳細を変更する",
            "delete": "削除する"
        },
        "comments": {
            "form": {
                "notLoggedIn": "コメントを書いたり、<br />フィードバックをするにはログインしてください。",
                "commentButton": "コメントする"
            },
            "noComments": "このゲームはまだコメントがありません。"
        },
        "trailerOverlay": {
            "closeButton": "閉じる"
        },
        "snackbar": {
            "error": {
                "serverError": "サーバーエラーによって、ゲームが読み込まれませんでした。後でやり直してください。",
                "notFound": "０ゲームが見つかりました。",
                "private": "このゲームを見るのは禁止です。"
            },
            "comments": {
                "success": {
                    "posted": "コメントが投稿されました。",
                    "deleted": "コメントが削除されました。"
                },
                "error": {
                    "serverError": "サーバーエラーによって、コメントが読み込まれませんでした。後でやり直してください。",
                    "postedServerError": "サーバーエラーによって、コメントが投稿されませんでした。後でやり直してください。",
                    "deletedServerError": "サーバーエラーによって、コメントが削除されませんでした。後でやり直してください。",
                    "notEmpty": "空のコメントは不可能です。"
                }
            }
        }
    },
    "gameEdit": {
        "header": "ゲームの詳細を変更すること",
        "explaination": "情報を調整して、スクリーンショットまたはYouTube動画を追加して、ゲームを公開する／非公開にすることができます。",
        "media": {
            "form": {
                "fileHint": ".png / .jpg",
                "deleteCoverButton": "カバー画像を削除する"
            }
        },
        "screenshots": {
            "header": "スクリーンショット"
        },
        "backToGamePageButton": "ホームページに戻る",
        "saveButton": "Save",
        "snackbar": {
            "success": {
                "screenshotDeleted": "スクリーンショットが削除されました。",
                "coverUpdated": "カバー画像が変更されました。",
                "coverDeleted": "カバー画像が削除されました。",
                "screenshotUploaded": "スクリーンショットが正常にアップされました。",
                "saved": "変更が保存されました。"
            },
            "error": {
                "loadServerError": "サーバーエラーによって、ゲームが読み込まれませんでした。後でやり直してください。",
                "loadNotFound": "０ゲームが見つかりました。",
                "loadPrivate": "このゲームを見るのは禁止です。",
                "notAllowed": "このゲームを編集するのは禁止です。",
                "screenshotDeleted": "スクリーンショットが削除されませんでした。後でやり直してください。",
                "coverDeleteServerError": "カバー画像が削除されませんでした。後でやり直してください。",
                "coverWrongFormat": "カバー画像の形式が正しくないので、変更されませんでした。PNGとJPEG／JPGというファイルだけ有効です。",
                "coverServerError": "カバー画像が変更されませんでした。後でやり直してください。",
                "coverDeleteServerError": "カバー画像が削除されませんでした。後でやり直してください。",
                "screenshotWrongFormat": "1つ以上のスクリーンショットの形式が正しくないので、アップされませんでした。PNGとJPEG／JPGというファイルだけ有効です。",
                "screenshotUploadServerError": "サーバーエラーによって、スクリーンショットがアップされませんでした。後でやり直してください。",
                "requiredEmpty": "空の必須な欄は不可能です。",
                "gameIDInvalid": "ゲームIDは無効です。 (正しい形式: G-000-000-000).",
            }
        }
    },
    "playlistDetail": {
        "header": "プレイリスト",
        "nogames": "このプレイリストにはまだゲームがありません。",
        "snackbar": {
            "error": {
                "notFound": "サーバーエラーによって、プレイリストが読み込まれませんでした。後でやり直してください。",
                "notAllowed": "このプレイリストを見ることができません。"
            }
        }
    },
    "userDetail": {
        "meta": {
            "pronouns": "人称代名詞",
            "ingameID": "ゲーム内ID",
            "joinedDate": "登録年月日",
            "teamVerified": "このユーザーはMyGarage.gamesチームの認証済みメンバーです。"
        },
        "action": {
            "edit": "詳細を変更する",
            "ban": "ユーザーを禁じる"
        },
        "nogames": "このユーザーはまだゲームを投稿しません。"
    },
    "userEdit": {
        "header": "プロファイルを変更すること",
        "explaination": "アバターの変更、 プロファイルの編集とパスワードの変更",
        "tabs": {
            "general": "一般情報",
            "avatar": "アバター",
            "security": "アカウントの安全"
            "language": "言語"
        },
        "form": {
            "username": "ユーザー名",
            "pronouns": "人称代名詞（例：彼、彼女）",
            "ingameID": "ゲーム内ID",
            "ingameIDPlaceholder": "P-000-000-000",
            "avatarImage": "アバター画像 (四角形状、JPG／JPEGまたはPNG)",
            "deleteAvatarButton": "アバターを削除する",
            "email": "メールアドレス",
            "password": "パスワード",
            "passwordAgain": "パスワード (も一度)"
            "language": "言語"
        },
        "backToProfileButton": "プロファイルに戻る",
        "saveButton": "保存する",
        "languageNotice": "サイトの翻訳はコミュニティーで作成しました。和訳はKaihatsu（http://kaihat.su）で作成しました。ご興味のある方は、Discordにご参加ください。",
        "snackbar": {
            "success": {
                "avatarUpdated": "アバターが変更されました。",
                "avatarDeleted": "アバターが削除されました。",
                "saved": "変更が保存されました。"
            },
            "error": {
                "notAllowed": "このユーザーの詳細を変更することができません。",
                "avatarWrongFormat": "アバターの形式が正しくないので、変更されませんでした。PNGとJPEG／JPGというファイルだけ有効です。",
                "avatarServerError": "アバターの更新ができませんでした。後でやり直してください。",
                "avatarDeleteServerError": "アバターの削除ができませんでした。後でやり直してください。",
                "usernameForbidden": "このユーザー名は禁じている文字を含みます。許可している文字： a～z, A～Z, 0-9, ハイフン (-), アンダースコア (_)",
                "saveServerError": "サーバーエラーによって、変更が保存されませんでした。後でやり直してください。",
                "saveIngameIDInvalid": "プロファイルIDは無効です。 (正しい形式: P-000-000-000).",
                "saveUsernameConflict": "このユーザー名はすでに使用中です。",
                "securityNotIdentical": "入力されたパスワードは同様ではありません。",
                "securityEmailInvalid": "メールアドレスが無効です。"
            }
        }
    },
    "comment": {
        "deleteButton": "削除する"
    },
    "game": {
        "snackbar": {
            "success": {
                "addToPlaylist": "{gameTitle}がプレイリストに追加されました。",
                "deleteFromPlaylist": "{gameTitle}がプレイリストから削除されました。"
            },
            "error": {
                "addToPlaylistServerError": "サーバーエラーによって、ゲームはプレイリストに追加されませんでした。後でやり直してください。",
                "deleteFromPlaylistServerError": "サーバーエラーによって、ゲームはプレイリストから削除されませんでした。後でやり直してください。"
            }
        }
    },
    "footer": {
        "disclaimer": "「MyGarage.games」はコミュニティーで作った無料のサイトで、任天堂と提携していません。<br />「Game Builder Garage」 は任天堂株式会社の登録商標です。",
        "legalLink": "法律情報（英語）",
        "apiLink": "API"
    }
}

export default messages;
